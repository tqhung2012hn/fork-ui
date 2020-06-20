import { config } from '../../ConfigProvider';

const icons = config.icons.reduce((_icons, icon) => {
  try {
    _icons[icon] = require(`./${icon}`).default;
    return _icons;
  } catch (e) {
    console.error(`${icon} not exsist!`);
  }
}, {});

export default icons;
/*
const icons = {
  'accessible': require('./accessible').default,
  'activity': require('./activity').default,
  'ad': require('./ad').default,
  'adjustments': require('./adjustments').default,
  'alarm': require('./alarm').default,
  'alert-circle': require('./alert-circle').default,
  'alert-triangle': require('./alert-triangle').default,
  'alien': require('./alien').default,
  'align-center': require('./align-center').default,
  'align-justified': require('./align-justified').default,
  'align-left': require('./align-left').default,
  'align-right': require('./align-right').default,
  'ambulance': require('./ambulance').default,
  'anchor': require('./anchor').default,
  'aperture': require('./aperture').default,
  'apps': require('./apps').default,
  'archive': require('./archive').default,
  'arrow-back-up': require('./arrow-back-up').default,
  'arrow-back': require('./arrow-back').default,
  'arrow-bar-down': require('./arrow-bar-down').default,
  'arrow-bar-left': require('./arrow-bar-left').default,
  'arrow-bar-right': require('./arrow-bar-right').default,
  'arrow-bar-up': require('./arrow-bar-up').default,
  'arrow-down-circle': require('./arrow-down-circle').default,
  'arrow-down-left-circle': require('./arrow-down-left-circle').default,
  'arrow-down-left': require('./arrow-down-left').default,
  'arrow-down-right-circle': require('./arrow-down-right-circle').default,
  'arrow-down-right': require('./arrow-down-right').default,
  'arrow-down': require('./arrow-down').default,
  'arrow-forward-up': require('./arrow-forward-up').default,
  'arrow-forward': require('./arrow-forward').default,
  'arrow-left-circle': require('./arrow-left-circle').default,
  'arrow-left': require('./arrow-left').default,
  'arrow-narrow-down': require('./arrow-narrow-down').default,
  'arrow-narrow-left': require('./arrow-narrow-left').default,
  'arrow-narrow-right': require('./arrow-narrow-right').default,
  'arrow-narrow-up': require('./arrow-narrow-up').default,
  'arrow-right-circle': require('./arrow-right-circle').default,
  'arrow-right': require('./arrow-right').default,
  'arrow-up-circle': require('./arrow-up-circle').default,
  'arrow-up-left-circle': require('./arrow-up-left-circle').default,
  'arrow-up-left': require('./arrow-up-left').default,
  'arrow-up-right-circle': require('./arrow-up-right-circle').default,
  'arrow-up-right': require('./arrow-up-right').default,
  'arrow-up': require('./arrow-up').default,
  'arrows-diagonal-2': require('./arrows-diagonal-2').default,
  'arrows-diagonal': require('./arrows-diagonal').default,
  'arrows-horizontal': require('./arrows-horizontal').default,
  'arrows-maximize': require('./arrows-maximize').default,
  'arrows-minimize': require('./arrows-minimize').default,
  'arrows-sort': require('./arrows-sort').default,
  'arrows-vertical': require('./arrows-vertical').default,
  'artboard': require('./artboard').default,
  'at': require('./at').default,
  'atom-2': require('./atom-2').default,
  'atom': require('./atom').default,
  'award': require('./award').default,
  'backspace': require('./backspace').default,
  'ball': require('./ball').default,
  'ban': require('./ban').default,
  'bandage': require('./bandage').default,
  'barcode': require('./barcode').default,
  'basket': require('./basket').default,
  'battery-1': require('./battery-1').default,
  'battery-2': require('./battery-2').default,
  'battery-3': require('./battery-3').default,
  'battery-4': require('./battery-4').default,
  'battery-charging': require('./battery-charging').default,
  'battery': require('./battery').default,
  'bed': require('./bed').default,
  'bell': require('./bell').default,
  'bike': require('./bike').default,
  'bluetooth': require('./bluetooth').default,
  'bold': require('./bold').default,
  'bolt': require('./bolt').default,
  'book': require('./book').default,
  'bookmark': require('./bookmark').default,
  'border-all': require('./border-all').default,
  'border-bottom': require('./border-bottom').default,
  'border-horizontal': require('./border-horizontal').default,
  'border-inner': require('./border-inner').default,
  'border-left': require('./border-left').default,
  'border-none': require('./border-none').default,
  'border-outer': require('./border-outer').default,
  'border-radius': require('./border-radius').default,
  'border-right': require('./border-right').default,
  'border-top': require('./border-top').default,
  'border-vertical': require('./border-vertical').default,
  'box': require('./box').default,
  'braces': require('./braces').default,
  'brackets': require('./brackets').default,
  'brand-android': require('./brand-android').default,
  'brand-apple': require('./brand-apple').default,
  'brand-chrome': require('./brand-chrome').default,
  'brand-dribbble': require('./brand-dribbble').default,
  'brand-facebook': require('./brand-facebook').default,
  'brand-framer': require('./brand-framer').default,
  'brand-github': require('./brand-github').default,
  'brand-gitlab': require('./brand-gitlab').default,
  'brand-google-drive': require('./brand-google-drive').default,
  'brand-google': require('./brand-google').default,
  'brand-instagram': require('./brand-instagram').default,
  'brand-opera': require('./brand-opera').default,
  'brand-paypal': require('./brand-paypal').default,
  'brand-safari': require('./brand-safari').default,
  'brand-sketch': require('./brand-sketch').default,
  'brand-snapchat': require('./brand-snapchat').default,
  'brand-telegram': require('./brand-telegram').default,
  'brand-twitter': require('./brand-twitter').default,
  'briefcase': require('./briefcase').default,
  'brightness-down': require('./brightness-down').default,
  'brightness-up': require('./brightness-up').default,
  'brightness': require('./brightness').default,
  'browser': require('./browser').default,
  'brush': require('./brush').default,
  'bucket': require('./bucket').default,
  'bug': require('./bug').default,
  'building-arch': require('./building-arch').default,
  'building-bank': require('./building-bank').default,
  'building-bridge-2': require('./building-bridge-2').default,
  'building-bridge': require('./building-bridge').default,
  'building-church': require('./building-church').default,
  'building-community': require('./building-community').default,
  'building-hospital': require('./building-hospital').default,
  'building-pavilon': require('./building-pavilon').default,
  'building-skyscrappers': require('./building-skyscrappers').default,
  'building-store': require('./building-store').default,
  'building-warehouse': require('./building-warehouse').default,
  'building': require('./building').default,
  'bulb-off': require('./bulb-off').default,
  'bulb': require('./bulb').default,
  'bus': require('./bus').default,
  'calculator': require('./calculator').default,
  'calendar-event': require('./calendar-event').default,
  'calendar-minus': require('./calendar-minus').default,
  'calendar-plus': require('./calendar-plus').default,
  'calendar': require('./calendar').default,
  'camera': require('./camera').default,
  'car': require('./car').default,
  'caret-down': require('./caret-down').default,
  'caret-left': require('./caret-left').default,
  'caret-right': require('./caret-right').default,
  'caret-up': require('./caret-up').default,
  'cash': require('./cash').default,
  'cast': require('./cast').default,
  'chart-area-line': require('./chart-area-line').default,
  'chart-area': require('./chart-area').default,
  'chart-bar': require('./chart-bar').default,
  'chart-candle': require('./chart-candle').default,
  'chart-donut': require('./chart-donut').default,
  'chart-line': require('./chart-line').default,
  'chart-pie': require('./chart-pie').default,
  'check': require('./check').default,
  'checkbox': require('./checkbox').default,
  'checks': require('./checks').default,
  'chevron-down': require('./chevron-down').default,
  'chevron-left': require('./chevron-left').default,
  'chevron-right': require('./chevron-right').default,
  'chevron-up': require('./chevron-up').default,
  'chevrons-down': require('./chevrons-down').default,
  'chevrons-left': require('./chevrons-left').default,
  'chevrons-right': require('./chevrons-right').default,
  'chevrons-up': require('./chevrons-up').default,
  'circle-check': require('./circle-check').default,
  'circle-minus': require('./circle-minus').default,
  'circle-plus': require('./circle-plus').default,
  'circle-x': require('./circle-x').default,
  'circle': require('./circle').default,
  'clear-formatting': require('./clear-formatting').default,
  'click': require('./click').default,
  'clipboard-check': require('./clipboard-check').default,
  'clipboard-list': require('./clipboard-list').default,
  'clipboard-x': require('./clipboard-x').default,
  'clipboard': require('./clipboard').default,
  'clock': require('./clock').default,
  'cloud-download': require('./cloud-download').default,
  'cloud-rain': require('./cloud-rain').default,
  'cloud-snow': require('./cloud-snow').default,
  'cloud-storm': require('./cloud-storm').default,
  'cloud-upload': require('./cloud-upload').default,
  'cloud': require('./cloud').default,
  'code': require('./code').default,
  'coin': require('./coin').default,
  'color-picker': require('./color-picker').default,
  'color-swatch': require('./color-swatch').default,
  'columns': require('./columns').default,
  'command': require('./command').default,
  'compass': require('./compass').default,
  'copy': require('./copy').default,
  'copyright': require('./copyright').default,
  'corner-down-left': require('./corner-down-left').default,
  'corner-down-right': require('./corner-down-right').default,
  'corner-left-down': require('./corner-left-down').default,
  'corner-left-up': require('./corner-left-up').default,
  'corner-right-down': require('./corner-right-down').default,
  'corner-right-up': require('./corner-right-up').default,
  'corner-up-left': require('./corner-up-left').default,
  'corner-up-right': require('./corner-up-right').default,
  'credit-card': require('./credit-card').default,
  'crop': require('./crop').default,
  'currency-bitcoin': require('./currency-bitcoin').default,
  'currency-dollar': require('./currency-dollar').default,
  'currency-euro': require('./currency-euro').default,
  'currency-pound': require('./currency-pound').default,
  'currency-rupee': require('./currency-rupee').default,
  'currency-yen': require('./currency-yen').default,
  'cut': require('./cut').default,
  'dashboard': require('./dashboard').default,
  'database': require('./database').default,
  'device-desktop': require('./device-desktop').default,
  'device-floppy': require('./device-floppy').default,
  'device-gamepad': require('./device-gamepad').default,
  'device-laptop': require('./device-laptop').default,
  'device-mobile-vibration': require('./device-mobile-vibration').default,
  'device-mobile': require('./device-mobile').default,
  'device-speaker': require('./device-speaker').default,
  'device-tablet': require('./device-tablet').default,
  'device-tv': require('./device-tv').default,
  'device-watch': require('./device-watch').default,
  'devices': require('./devices').default,
  'diamond': require('./diamond').default,
  'dice': require('./dice').default,
  'direction-horizontal': require('./direction-horizontal').default,
  'direction': require('./direction').default,
  'directions': require('./directions').default,
  'disabled-2': require('./disabled-2').default,
  'disabled': require('./disabled').default,
  'disc': require('./disc').default,
  'discount': require('./discount').default,
  'dots-circle-horizontal': require('./dots-circle-horizontal').default,
  'dots-diagonal-2': require('./dots-diagonal-2').default,
  'dots-diagonal': require('./dots-diagonal').default,
  'dots-vertical': require('./dots-vertical').default,
  'dots': require('./dots').default,
  'download': require('./download').default,
  'drag-drop-2': require('./drag-drop-2').default,
  'drag-drop': require('./drag-drop').default,
  'droplet': require('./droplet').default,
  'ear': require('./ear').default,
  'edit': require('./edit').default,
  'egg': require('./egg').default,
  'emphasis': require('./emphasis').default,
  'eraser': require('./eraser').default,
  'exchange': require('./exchange').default,
  'exposure': require('./exposure').default,
  'external-link': require('./external-link').default,
  'eye': require('./eye').default,
  'face-id': require('./face-id').default,
  'file-check': require('./file-check').default,
  'file-code': require('./file-code').default,
  'file-download': require('./file-download').default,
  'file-horizontal': require('./file-horizontal').default,
  'file-invoice': require('./file-invoice').default,
  'file-minus': require('./file-minus').default,
  'file-music': require('./file-music').default,
  'file-plus': require('./file-plus').default,
  'file-shredder': require('./file-shredder').default,
  'file-text': require('./file-text').default,
  'file-x': require('./file-x').default,
  'file': require('./file').default,
  'filter': require('./filter').default,
  'fingerprint': require('./fingerprint').default,
  'firetruck': require('./firetruck').default,
  'flag': require('./flag').default,
  'flask': require('./flask').default,
  'flip-horizontal': require('./flip-horizontal').default,
  'flip-vertical': require('./flip-vertical').default,
  'float-center': require('./float-center').default,
  'float-left': require('./float-left').default,
  'float-right': require('./float-right').default,
  'floppy-disk': require('./floppy-disk').default,
  'focus-2': require('./focus-2').default,
  'focus': require('./focus').default,
  'folder-minus': require('./folder-minus').default,
  'folder-plus': require('./folder-plus').default,
  'folder-x': require('./folder-x').default,
  'folder': require('./folder').default,
  'folders': require('./folders').default,
  'forbid-2': require('./forbid-2').default,
  'forbid': require('./forbid').default,
  'forklift': require('./forklift').default,
  'frame': require('./frame').default,
  'friends': require('./friends').default,
  'gauge': require('./gauge').default,
  'ghost': require('./ghost').default,
  'gift': require('./gift').default,
  'git-branch': require('./git-branch').default,
  'git-commit': require('./git-commit').default,
  'git-compare': require('./git-compare').default,
  'git-fork': require('./git-fork').default,
  'git-merge': require('./git-merge').default,
  'git-pull-request': require('./git-pull-request').default,
  'glass-full': require('./glass-full').default,
  'glass': require('./glass').default,
  'globe': require('./globe').default,
  'grid-dots': require('./grid-dots').default,
  'grid': require('./grid').default,
  'grip-horizontal': require('./grip-horizontal').default,
  'grip-vertical': require('./grip-vertical').default,
  'hash': require('./hash').default,
  'headphones': require('./headphones').default,
  'headset': require('./headset').default,
  'heart': require('./heart').default,
  'help': require('./help').default,
  'hexagon': require('./hexagon').default,
  'history': require('./history').default,
  'home-2': require('./home-2').default,
  'home': require('./home').default,
  'ice-cream': require('./ice-cream').default,
  'id': require('./id').default,
  'inbox': require('./inbox').default,
  'indent-decrease': require('./indent-decrease').default,
  'indent-increase': require('./indent-increase').default,
  'infinity': require('./infinity').default,
  'info-circle': require('./info-circle').default,
  'info-square': require('./info-square').default,
  'italic': require('./italic').default,
  'key': require('./key').default,
  'keyboard': require('./keyboard').default,
  'language': require('./language').default,
  'layers-difference': require('./layers-difference').default,
  'layers-intersect': require('./layers-intersect').default,
  'layers-subtract': require('./layers-subtract').default,
  'layers-union': require('./layers-union').default,
  'layout-2': require('./layout-2').default,
  'layout-align-bottom': require('./layout-align-bottom').default,
  'layout-align-center': require('./layout-align-center').default,
  'layout-align-left': require('./layout-align-left').default,
  'layout-align-middle': require('./layout-align-middle').default,
  'layout-align-right': require('./layout-align-right').default,
  'layout-align-top': require('./layout-align-top').default,
  'layout-bottombar': require('./layout-bottombar').default,
  'layout-cards': require('./layout-cards').default,
  'layout-columns': require('./layout-columns').default,
  'layout-distribute-horizontal': require('./layout-distribute-horizontal').default,
  'layout-distribute-vertical': require('./layout-distribute-vertical').default,
  'layout-list': require('./layout-list').default,
  'layout-navbar': require('./layout-navbar').default,
  'layout-rows': require('./layout-rows').default,
  'layout-sidebar-right': require('./layout-sidebar-right').default,
  'layout-sidebar': require('./layout-sidebar').default,
  'layout': require('./layout').default,
  'lego': require('./lego').default,
  'letter-case': require('./letter-case').default,
  'license': require('./license').default,
  'lifebuoy': require('./lifebuoy').default,
  'line-height': require('./line-height').default,
  'link': require('./link').default,
  'list-check': require('./list-check').default,
  'list': require('./list').default,
  'live-photo': require('./live-photo').default,
  'location': require('./location').default,
  'lock-open': require('./lock-open').default,
  'lock': require('./lock').default,
  'login': require('./login').default,
  'logout': require('./logout').default,
  'magnet': require('./magnet').default,
  'mail-opened': require('./mail-opened').default,
  'mail': require('./mail').default,
  'man': require('./man').default,
  'map-2': require('./map-2').default,
  'map-pin': require('./map-pin').default,
  'map': require('./map').default,
  'math': require('./math').default,
  'maximize': require('./maximize').default,
  'menu': require('./menu').default,
  'message-2': require('./message-2').default,
  'message-circle': require('./message-circle').default,
  'message-dots': require('./message-dots').default,
  'message': require('./message').default,
  'messages': require('./messages').default,
  'microphone': require('./microphone').default,
  'minimize': require('./minimize').default,
  'minus': require('./minus').default,
  'mood-confuzed': require('./mood-confuzed').default,
  'mood-happy': require('./mood-happy').default,
  'mood-kid': require('./mood-kid').default,
  'mood-neutral': require('./mood-neutral').default,
  'mood-sad': require('./mood-sad').default,
  'mood-smile': require('./mood-smile').default,
  'mood-suprised': require('./mood-suprised').default,
  'mood-tongue': require('./mood-tongue').default,
  'moon': require('./moon').default,
  'mouse': require('./mouse').default,
  'movie': require('./movie').default,
  'mug': require('./mug').default,
  'music': require('./music').default,
  'new-section': require('./new-section').default,
  'news': require('./news').default,
  'note': require('./note').default,
  'notebook': require('./notebook').default,
  'notes': require('./notes').default,
  'notification': require('./notification').default,
  'omega': require('./omega').default,
  'outlet': require('./outlet').default,
  'package': require('./package').default,
  'paint': require('./paint').default,
  'palette': require('./palette').default,
  'paperclip': require('./paperclip').default,
  'parentheses': require('./parentheses').default,
  'parking': require('./parking').default,
  'pencil': require('./pencil').default,
  'phone-call': require('./phone-call').default,
  'phone-check': require('./phone-check').default,
  'phone-incoming': require('./phone-incoming').default,
  'phone-outgoing': require('./phone-outgoing').default,
  'phone-pause': require('./phone-pause').default,
  'phone-plus': require('./phone-plus').default,
  'phone-x': require('./phone-x').default,
  'phone': require('./phone').default,
  'photo': require('./photo').default,
  'pillow': require('./pillow').default,
  'plane-arrival': require('./plane-arrival').default,
  'plane-departure': require('./plane-departure').default,
  'plane': require('./plane').default,
  'planet': require('./planet').default,
  'plug': require('./plug').default,
  'plus': require('./plus').default,
  'point': require('./point').default,
  'power': require('./power').default,
  'presentation': require('./presentation').default,
  'printer': require('./printer').default,
  'prompt': require('./prompt').default,
  'puzzle': require('./puzzle').default,
  'qrcode': require('./qrcode').default,
  'record-mail': require('./record-mail').default,
  'recycle': require('./recycle').default,
  'refresh': require('./refresh').default,
  'registered': require('./registered').default,
  'repeat-once': require('./repeat-once').default,
  'repeat': require('./repeat').default,
  'replace': require('./replace').default,
  'rotate-2': require('./rotate-2').default,
  'rotate-clockwise-2': require('./rotate-clockwise-2').default,
  'rotate-clockwise': require('./rotate-clockwise').default,
  'rotate-rectangle': require('./rotate-rectangle').default,
  'rotate': require('./rotate').default,
  'route': require('./route').default,
  'router': require('./router').default,
  'rss': require('./rss').default,
  'ruler': require('./ruler').default,
  'scale': require('./scale').default,
  'scan': require('./scan').default,
  'scissors': require('./scissors').default,
  'search': require('./search').default,
  'selector': require('./selector').default,
  'send': require('./send').default,
  'separator': require('./separator').default,
  'server': require('./server').default,
  'servicemark': require('./servicemark').default,
  'settings': require('./settings').default,
  'shape': require('./shape').default,
  'share': require('./share').default,
  'shield-check': require('./shield-check').default,
  'shield-x': require('./shield-x').default,
  'shield': require('./shield').default,
  'shirt': require('./shirt').default,
  'shopping-cart': require('./shopping-cart').default,
  'sitemap': require('./sitemap').default,
  'slice': require('./slice').default,
  'slideshow': require('./slideshow').default,
  'snowflake': require('./snowflake').default,
  'social': require('./social').default,
  'sort-ascending': require('./sort-ascending').default,
  'sort-descending': require('./sort-descending').default,
  'space': require('./space').default,
  'square-check': require('./square-check').default,
  'square-minus': require('./square-minus').default,
  'square-plus': require('./square-plus').default,
  'square-x': require('./square-x').default,
  'square': require('./square').default,
  'stack': require('./stack').default,
  'star': require('./star').default,
  'sticker': require('./sticker').default,
  'strikethrough': require('./strikethrough').default,
  'subscript': require('./subscript').default,
  'sum': require('./sum').default,
  'sun': require('./sun').default,
  'superscript': require('./superscript').default,
  'switch-horizontal': require('./switch-horizontal').default,
  'switch-vertical': require('./switch-vertical').default,
  'switch': require('./switch').default,
  'table': require('./table').default,
  'tag': require('./tag').default,
  'target': require('./target').default,
  'tax': require('./tax').default,
  'temperature-celsius': require('./temperature-celsius').default,
  'temperature-fahrenheit': require('./temperature-fahrenheit').default,
  'temperature-minus': require('./temperature-minus').default,
  'temperature-plus': require('./temperature-plus').default,
  'temperature': require('./temperature').default,
  'template': require('./template').default,
  'terminal-2': require('./terminal-2').default,
  'terminal': require('./terminal').default,
  'test-pipe': require('./test-pipe').default,
  'text-wrap': require('./text-wrap').default,
  'thumb-down': require('./thumb-down').default,
  'thumb-up': require('./thumb-up').default,
  'ticket': require('./ticket').default,
  'tir': require('./tir').default,
  'toggle-left': require('./toggle-left').default,
  'toggle-right': require('./toggle-right').default,
  'tool': require('./tool').default,
  'tools': require('./tools').default,
  'tractor': require('./tractor').default,
  'trademark': require('./trademark').default,
  'traffic-cone': require('./traffic-cone').default,
  'trash': require('./trash').default,
  'trees': require('./trees').default,
  'trending-down': require('./trending-down').default,
  'trending-up': require('./trending-up').default,
  'triangle': require('./triangle').default,
  'trophy': require('./trophy').default,
  'truck': require('./truck').default,
  'typography': require('./typography').default,
  'umbrella': require('./umbrella').default,
  'underline': require('./underline').default,
  'unlink': require('./unlink').default,
  'upload': require('./upload').default,
  'urgent': require('./urgent').default,
  'user-check': require('./user-check').default,
  'user-exclamation': require('./user-exclamation').default,
  'user-minus': require('./user-minus').default,
  'user-plus': require('./user-plus').default,
  'user-x': require('./user-x').default,
  'user': require('./user').default,
  'users': require('./users').default,
  'viewfinder': require('./viewfinder').default,
  'viewport-narrow': require('./viewport-narrow').default,
  'viewport-wide': require('./viewport-wide').default,
  'virus': require('./virus').default,
  'volume-2': require('./volume-2').default,
  'volume-3': require('./volume-3').default,
  'volume': require('./volume').default,
  'wallet': require('./wallet').default,
  'wand': require('./wand').default,
  'wifi-0': require('./wifi-0').default,
  'wifi-1': require('./wifi-1').default,
  'wifi-2': require('./wifi-2').default,
  'wifi': require('./wifi').default,
  'woman': require('./woman').default,
  'world': require('./world').default,
  'x': require('./x').default,
  'zoom-in': require('./zoom-in').default,
  'zoom-out': require('./zoom-out').default,
};
*/