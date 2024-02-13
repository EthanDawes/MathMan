import {findMenuItem, menuGroup, menuItem, TLUiOverrides} from "@tldraw/tldraw";

export const uiOverrides: TLUiOverrides = {
  tools(editor, tools) {
    // Create a tool item in the ui's context.
    tools.card = {
      id: 'card',
      icon: 'color',
      label: 'tools.card',
      kbd: 'c',
      readonlyOk: false,
      onSelect: () => {
        console.log("wow!")
        // Whatever you want to happen when the tool is selected
        editor.setCurrentTool('card')
      },
    }
    return tools
  },
  actions(editor, actions) {
    // Create a new action or replace an existing one
    actions['my-new-action'] = {
      id: 'my-new-action',
      label: 'My new action',
      readonlyOk: true,
      kbd: '$u',
      onSelect(source: any) {
        window.alert('My new action just happened!')
      },
    }
    return actions
  },
  contextMenu(editor, contextMenu, { actions }) {
    const newMenuItem = menuItem(actions['my-new-action'])
    const newMenuGroup = menuGroup('my-items', newMenuItem)
    contextMenu.unshift(newMenuItem)
    return contextMenu
  },
  menu(editor, menu, { actions }) {
    // using the findMenuItem helper
    const fileMenu = findMenuItem(menu, ['menu', 'file'])
    if (fileMenu.type === 'submenu') {
      // add the new item to the file menu's children
      const newMenuItem = menuItem(actions['my-new-action'])
      fileMenu.children.unshift(newMenuItem)
    }
    return menu
  },
}
