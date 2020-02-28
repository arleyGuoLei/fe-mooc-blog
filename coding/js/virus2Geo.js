const request = require('request')

const options = {
  method: 'GET',
  url: 'https://view.inews.qq.com/g2/getOnsInfo',
  qs: { name: 'disease_h5' },
  headers: { 'cache-control': 'no-cache' }
}

const getGeo = (area) => {
  const options = {
    method: 'GET',
    url: 'http://api.tianditu.gov.cn/geocoder',
    qs: { ds: '{"keyWord":"' + area + '"}' },
    headers: { 'cache-control': 'no-cache' }
  }
  request(options, function(error, response, body) {
    if (error) throw new Error(error)
    console.log(`获取: 【${area}】 经纬度： ${body}`)
  })
}

const getAreas = (str) => {
  const re = /"name":"(.*?)"/g
  let result
  const area = []
  // eslint-disable-next-line no-cond-assign
  while (result = re.exec(str)) {
    area.push(result[1])
  }
  return area
}
request(options, function(error, response, body) {
  if (error) throw new Error(error)
  const bodyObj = JSON.parse(body)
  const { data } = bodyObj
  const str = JSON.stringify(JSON.parse(data).areaTree)
  const areas = getAreas(str)
  areas.forEach(area => {
    getGeo(area)
  })
})

