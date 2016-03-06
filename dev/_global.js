'use strict'
const getComponent = (name, dir, nameFile) => {
    dir = dir || '_mixins'
    nameFile = nameFile || '_mock'

    const path = require('path')

    let route = `./${dir}/${name}/${nameFile}.js`
    route = path.resolve(__dirname, route)

    delete require.cache[route]
    return require(route)
}

module.exports = {
	scripts: getComponent('commons/scripts/'),
	promotion: getComponent('home/promocion/')
}