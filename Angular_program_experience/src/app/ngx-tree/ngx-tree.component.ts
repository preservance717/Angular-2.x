import {Component, OnInit, ViewChild} from '@angular/core';
import {
  TreeNode, ITreeOptions, IActionMapping, TREE_ACTIONS, KEYS, TreeComponent
} from "angular-tree-component";

@Component({
  selector: 'app-ngx-tree',
  templateUrl: './ngx-tree.component.html',
  styleUrls: ['./ngx-tree.component.css']
})
export class NgxTreeComponent implements OnInit {
  nodes: any[];
  currentNode: any;

  @ViewChild('tree') treeComponent: TreeComponent;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.nodes = [
        {
          expanded: true,
          name: 'root expanded',
          subTitle: 'the root',
          children: [
            {
              name: 'child1',
              subTitle: 'a good child',
              hasChildren: false
            }, {
              name: 'child2',
              subTitle: 'a bad child',
              hasChildren: false
            }
          ]
        },
        {
          name: 'root2',
          subTitle: 'the second root',
          expanded: true,
          children: [
            {
              name: 'child2.1',
              subTitle: 'new and improved',
              uuid: '11',
              hasChildren: false
            }, {
              name: 'child2.2',
              subTitle: 'new and improved2',
              children: [
                {
                  uuid: 1001,
                  name: 'subsub',
                  subTitle: 'subsub',
                  hasChildren: false
                }
              ]
            }
          ]
        },
        {
          name: 'root2',
          subTitle: 'the second root',
          expanded: true,
          children: [
            {
              name: 'child2.1',
              subTitle: 'new and improved',
              uuid: '11',
              hasChildren: false
            }, {
              name: 'child2.2',
              subTitle: 'new and improved2',
              children: [
                {
                  uuid: 1001,
                  name: 'subsub',
                  subTitle: 'subsub',
                  hasChildren: false
                }
              ]
            }
          ]
        },
        {
          name: 'root2',
          subTitle: 'the second root',
          expanded: true,
          children: [
            {
              name: 'child2.1',
              subTitle: 'new and improved',
              uuid: '11',
              hasChildren: false
            }, {
              name: 'child2.2',
              subTitle: 'new and improved2',
              children: [
                {
                  uuid: 1001,
                  name: 'subsub',
                  subTitle: 'subsub',
                  hasChildren: false
                }
              ]
            }
          ]
        },
        {
          name: 'root2',
          subTitle: 'the second root',
          expanded: true,
          children: [
            {
              name: 'child2.1',
              subTitle: 'new and improved',
              expanded: true,
              uuid: '11',
              hasChildren: false
            }, {
              name: 'child2.2',
              subTitle: 'new and improved2',
              children: [
                {
                  uuid: 1001,
                  name: 'subsub',
                  subTitle: 'subsub',
                  hasChildren: false,
                  children:[
                    {
                      name: 'child2.1',
                      subTitle: 'new and improved',
                      expanded: true,
                      uuid: '11',
                      hasChildren: false
                    }
                  ]
                }
              ]
            }
          ]
        },
      ];
    }, 1);
  }

  childrenCount(node: TreeNode): string {
    return node && node.children ? `(${node.children.length})` : '';
  }

  onInitialized(tree) {
    // tree.treeModel.getNodeById('11').setActiveAndVisible();
  }

  onEvent(event) {
    // console.log(event);
  }

  go($event) {
    $event.stopPropagation();
    alert('this method is on the app component');
  }

  customTemplateStringOptions: ITreeOptions = {
    displayField: 'subTitle',
    isExpandedField: 'expanded',
    idField: 'uuid',
    // getChildren: this.getChildren.bind(this),
    actionMapping: {
      mouse: {
        contextMenu: (tree, node, $event) => {//右击
          $event.preventDefault();//阻止浏览器默认行为
          $event.stopPropagation();
          // alert(`context menu for ${node.data.name}`);
        },
        dblClick: (tree, node, $event) => {//双击左键
          if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
        },
        click: (tree, node, $event) => {//左键
          this.currentNode = node;
          $event.shiftKey
            ? TREE_ACTIONS.TOGGLE_SELECTED_MULTI(tree, node, $event)
            : TREE_ACTIONS.TOGGLE_SELECTED(tree, node, $event);
        }
      },
      keys: {
        [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
      }
    },
    nodeHeight: 23,
    allowDrag: (node) => {
      // console.log('allowDrag?');
      return true;
    },
    allowDrop: (node) => {
      // console.log('allowDrop?');
      return true;
    },
    useVirtualScroll: true,
    animateExpand: true,
    animateSpeed: 30,
    animateAcceleration: 1.2
  };

  showMessage(message: string): void {
    // console.log(message);
  }

  addNode(tree) {
    if (this.currentNode.hasChildren) {
      this.currentNode.data.children.push({name: "new child"});
    } else {
      this.currentNode.data.children = [{name: "new child"}];
    }

    tree.treeModel.update();
  }

  deleteNode(tree) {
    if (!this.currentNode.isRoot) {
      this.currentNode.parent.data.children = this.currentNode.parent.data.children.filter(node => node != this.currentNode.data);
    } else {
      this.currentNode.hide();
    }

    tree.treeModel.update();
  }
}
