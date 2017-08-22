import {Component, OnInit, ViewChild} from '@angular/core';
import {
  TreeNode, ITreeOptions, IActionMapping, TREE_ACTIONS, KEYS, TreeComponent
} from "angular-tree-component";

const actionMapping: IActionMapping = {
  mouse: {
    contextMenu: (tree, node, $event) => {//右击
      $event.preventDefault();//必须
      // alert(`context menu for ${node.data.name}`);
    },
    dblClick: (tree, node, $event) => {//双击左键
      if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
    },
    click: (tree, node, $event) => {//左键
      $event.shiftKey
        ? TREE_ACTIONS.TOGGLE_SELECTED_MULTI(tree, node, $event)
        : TREE_ACTIONS.TOGGLE_SELECTED(tree, node, $event);
    }
  },
  keys: {
    [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
  }
};
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
        }
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
    actionMapping,
    nodeHeight: 46,
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
  }

  public showMessage(message: string): void {
    console.log(message);
  }

  getCurrentNode(node) {
    if (node.data)
      this.currentNode = node.data;
  }

  addTodo(tree) {
    const children = this.currentNode.children;
    if (children) {
      children.push({name: 'new child', subTitle: 'new child'});
    } else {
      this.currentNode["children"] = [{
        name: 'new child', subTitle: 'new child'
      }];
    }

    tree.treeModel.update();
  }
}
