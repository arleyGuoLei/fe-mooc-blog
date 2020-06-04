const industry_list = [{
  'parent_ind': '女装',
  'name': '连衣裙'
},
{
  'name': '女装'
},
{
  'parent_ind': '女装',
  'name': '半身裙'
},
{
  'parent_ind': '女装',
  'name': 'A字裙'
},
{
  'name': '数码'
},
{
  'parent_ind': '数码',
  'name': '电脑配件'
},
{
  'parent_ind': '电脑配件',
  'name': '内存'
}]

function convert_format(data) {
  const tree = {}
  data.forEach(item => {
    if (typeof item['parent_ind'] !== 'undefined') {
      // 1
    } else {
      tree[item['name']] = {}
    }
  })
  console.log('log => : functionconvert_format -> tree', tree)
}

convert_format(industry_list)
