var layoutInfo = {
    startTab: "none",
	showTree: true,

    treeLayout: ""

    
}


// A "ghost" layer which offsets other layers in the tree
addNode("blank", {
    layerShown: "ghost",
}, 
)


addLayer("tree-tab", {
    tabFormat: [["tree", function() {return (layoutInfo.treeLayout ? layoutInfo.treeLayout : TREE_LAYERS)}]]
})

addLayer("eeeee", {
  layerShown: "ghost",
  row: 1,
  position: 1
});

addLayer("eeeeee", {
  layerShown: "ghost",
  row: 1,
  position: 3
})