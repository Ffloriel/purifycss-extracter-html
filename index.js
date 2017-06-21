import posthtml from "posthtml"
import match from "posthtml-match-helper"

var selectors = []
const postHTMLSelectors = tree => {
    // get all classes
    tree.match({ attrs: { class: true } }, node => {
        node.attrs.class.split(" ").forEach(item => {
            selectors.push(item)
        })
    })
    tree.match({ attrs: { id: true } }, node => {
        node.attrs.id.split(" ").forEach(item => {
            selectors.push(item)
        })
    })
    return selectors
}

class PurifyCssExtracterHtml {
    static extract(content) {
        //let selectors = []
        selectors = []
        posthtml().use(postHTMLSelectors).process(content, { sync: true })
        return selectors
    }
}

export default PurifyCssExtracterHtml
