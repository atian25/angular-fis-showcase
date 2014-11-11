//项目配置，将name、version独立配置，统管全局
var meta = require('./package.json');
fis.config.set('name', meta.name);
fis.config.set('version', meta.version);

//开发部署规范配置
fis.config.set('roadmap.path', [
  {
    reg : '**.md',
    release : false,
    isHtmlLike : true
  },
  {
    reg : /\.inline\.\w+$/i,
    release : false
  },
  {
    reg: /.*\.tpl\.html$/,
    isHtmlLike : true,
    release: false
  },
  {
    reg: /.*\.spec\.js$/,
    release: false
  },
  {
    reg: /(.*\.inject\.js)$/i,
    release: '/server/inject/$1',
    useHash: false
  },
  {
    reg: /dist/,
    release: false
  },
  //生态模块
  {
    reg : /^\/component_modules\/(.*)\.(styl|css)$/i,
    id : '$1.css',
    isMod : true,
    useSprite : true,
    useHash : false,
    url : '${urlPrefix}/c/$1.$2',
    release : '/public/c/$1.$2'
  },
  {
    reg : /^\/component_modules\/(.*\.js)$/i,
    id : '$1',
    isMod : true,
    useHash : false,
    url : '${urlPrefix}/c/$1',
    release : '/public/c/$1'
  },
  {
    reg : /^\/component_modules\/(.*)$/i,
    url : '${urlPrefix}/c/$1',
    release : '/public/c/$1'
  },
  //工程模块
  {
    reg : /^\/components\/(.*)\.(styl|css)$/i,
    id : '${name}/${version}/$1.css',
    isMod : true,
    useSprite : true,
    useHash : false,
    url : '${urlPrefix}/c/${name}/${version}/$1.$2',
    release : '/public/c/${name}/${version}/$1.$2'
  },
  {
    reg : /^\/components\/(.*\.js)$/i,
    id : '${name}/${version}/$1',
    isMod : true,
    isComponent : true,
    useHash : false,
    url : '${urlPrefix}/c/${name}/${version}/$1',
    release : '/public/c/${name}/${version}/$1'
  },
  {
    reg : /^\/components\/(.*)$/i,
    url : '${urlPrefix}/c/${name}/${version}/$1',
    release : '/public/c/${name}/${version}/$1'
  },
  //非模块化文件
  {
    reg : /^\/views\/(.*\.(?:html?|js))$/,
    useCache : false,
    isViews : true,
    url : '${urlPrefix}/${name}/${version}/$1',
    release : '/public/${name}/${version}/$1'
  },
  {
    reg : /^\/views\/(.*)$/,
    useSprite : true,
    isViews : true,
    url : '${urlPrefix}/${name}/${version}/$1',
    release : '/public/${name}/${version}/$1'
  },
  //其他文件
  {
    reg : 'map.json',
    release : false
  },
  {
    reg : '**',
    useHash : false,
    useCompile : false
  }
]);

