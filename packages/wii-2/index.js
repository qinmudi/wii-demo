export default 
  require('./package.json').name 
  + 'depends on [' + require('module-1').default + ']'