const startTagOpen = /^<((?:[a-zA-Z_][\-\.0-9_a-zA-Za-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]*\:)?[a-zA-Z_][\-\.0-9_a-zA-Za-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]*)/
const startTagClose = /^\s*(\/?)>/
const dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/
const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/
const unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/
const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z${unicodeRegExp.source}]*`
const qnameCapture = `((?:${ncname}\\:)?${ncname})`
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`)

function parseHTML(html, options) {
    // debugger
    const stack = []

    var index = 0
    var last, lastTag

    while (html) {
        last = html
        // debugger

        if (!lastTag || !isPlainTextElement(lastTag)) {
            var textEnd = html.indexOf('<')

            if (textEnd === 0) {

                // End tag
                var endTagMatch = html.match(endTag)
                if (endTagMatch) {
                    var curIndex = index
                    advance(endTagMatch[0].length)
                    parseEndTag(endTagMatch[1], curIndex, index)
                    continue
                }

                // start tag
                var startTagMatch = parseStartTag()
                if (startTagMatch) {
                    handleStartTag(startTagMatch)
                    continue
                }
            }
            
            var text = (void 0), rest = (void 0), next = (void 0)
            if (textEnd >= 0) {
                rest = html.slice(textEnd)

                while(
                    !endTag.test(rest) &&
                    !startTagOpen.test(rest)
                ) {
                    // 处理 " <div" "<div" 处理空格之类
                    next = rest.indexOf('<', 1)
                    if (next < 0) break
                    textEnd += next
                    rest = html.slice(textEnd)
                }
                text = html.substring(0, textEnd)
            }

            if (textEnd < 0) {
                text = html
            }
            
            if (text) {
                advance(text.length)
            }

            if (options.chars && text) {
                options.chars(text, index - text.length, index)
            }

        } else {
            let endTagLength = 0

        }
        // return
    }

    function advance(n) {
        index += n;
        html = html.substring(n);
    }
    
    function parseStartTag() {
        var start = html.match(startTagOpen)
    
        if (start) {
            var match = {
                tagName: start[1],
                attrs: [],
                start: index
            }
            advance(start[0].length)
            var end, attr

            while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
                attr.start = index
                advance(attr[0].length)
                attr.end = index
                match.attrs.push(attr)
            }
            
            if (end) {
                match.unarySlash = end[1]
                advance(end[0].length)
                match.end = index
                return match
            }
        }
    }

    function handleStartTag(match) {
        var tagName = match.tagName
        var unarySlash = match.unarySlash

        var l = match.attrs.length
        var attrs = new Array(l)

        for (var i = 0; i < l; i++) {
            var args = match.attrs[i]
            var value = args[3] || args[4] || args[5] || ''

            attrs[i] = {
                name: args[1],
                value: value
            }
            attrs[i].start = args.start + args[0].match(/^\s*/).length
            attrs[i].end = args.end
        }

        // if (unary) // 是否为单标签 eg: <br> <hr> <area>

        stack.push({
            tag: tagName,
            lowerCasedTag: tagName.toLowerCase(),
            attrs: attrs,
            start: match.start,
            end: match.end
        })

        lastTag = tagName

        if (options.start) {
            options.start(tagName, attrs, false, match.start, match.end)
        }
    }

    function parseEndTag(tagName, start, end) {
        var pos, lowerCasedTagName
        if (start == null) {
            start = index
        }
        if (end == null) {
            end = index
        }
        
        if (tagName) {
            lowerCasedTagName = tagName.toLowerCase()

            for (pos = stack.length - 1; pos > 0; pos--) {
                if (stack[pos].lowerCasedTag === lowerCasedTagName) {
                    break
                }
            }
        } else {
            // if not tag name is  
            pos = 0
        }

        if (pos >= 0) {
            for (var i = stack.length - 1; i >= pos; i--) {
                if (options.end) {
                    options.end(stack[i].tag, start, end)
                }
            }
            stack.length = pos
            lastTag = pos && stack[pos - 1].tag
        }
    }
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
    str,
    expectsLowerCase
) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase
      ? function (val) { return map[val.toLowerCase()]; }
      : function (val) { return map[val]; }
}

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);


