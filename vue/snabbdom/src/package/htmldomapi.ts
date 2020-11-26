export interface DOMAPI {
  createElement: (tagName: any) => HTMLElement
  createElementNS: (namespaceURI: string, qualifiedName: string) => Element
  createTextNode: (text: string) => Text
  createComment: (text: string) => Comment
  insertBefore: (parentNode: Node, newNode: Node, referenceNode: Node | null) => void
  removeChild: (node: Node, child: Node) => void
  appendChild: (node: Node, child: Node) => void
  parentNode: (node: Node) => Node | null
  nextSibling: (node: Node) => Node | null
  tagName: (elm: Element) => string
  // setTextContent: (node: Node, text: string | null) => void
  // getTextContent: (node: Node) => string | null
  // isElement: (node: Node) => node is Element
  // isText: (node: Node) => node is Text
  // isComment: (node: Node) => node is Comment
}

function createElement(tagName: any): HTMLElement {
  return document.createElement(tagName)
}

function createElementNS(namespaceURI: string, qualifiedName: string): Element {
  return document.createElementNS(namespaceURI, qualifiedName)
}

function createTextNode(text: string): Text {
  return document.createTextNode(text)
}

// 创建注释节点
function createComment(text: string): Comment {
  // <!-- 你好 -->
  return document.createComment(text)
}

function insertBefore(parentNode: Node, newNode: Node, referenceNode: Node | null): void {
  parentNode.insertBefore(newNode, referenceNode)
}

function removeChild(node: Node, child: Node): void {
  node.removeChild(child)
}

function appendChild(node: Node, child: Node): void {
  node.appendChild(child)
}

function parentNode(node: Node): Node | null {
  return node.parentNode
}

function nextSibling(node: Node): Node | null {
  return node.nextSibling
}

function tagName(elm: Element): string {
  return elm.tagName
}

export const htmlDomApi: DOMAPI = {
  createElement,
  createElementNS,
  createTextNode,
  createComment,
  insertBefore,
  removeChild,
  appendChild,
  parentNode,
  nextSibling,
  tagName
}