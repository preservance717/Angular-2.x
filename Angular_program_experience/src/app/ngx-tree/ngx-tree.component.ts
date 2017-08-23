import {Component, OnInit, ViewChild} from '@angular/core';
import {
  TreeNode, ITreeOptions, IActionMapping, TREE_ACTIONS, KEYS, TreeComponent
} from "angular-tree-component";

import * as $ from 'jquery';

@Component({
  selector: 'app-ngx-tree',
  templateUrl: './ngx-tree.component.html',
  styleUrls: ['./ngx-tree.component.css']
})
export class NgxTreeComponent implements OnInit {
  nodes: any[];
  currentNode: any;
  sliderMoving: boolean = false;

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
                  children: [
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
    this.reinitSize();
    this.load();
  }

  reinitSize() {
    var width = $(window).width() - 6;
    var height = $(window).height();
    $("#divLeft").css({height: height + "px", width: width * 0.25 + "px"});
    $("#divS").css({height: height - 2 + "px", width: "4px"});
    $("#divSG").css({height: height - 2 + "px", width: "4px"});
    $("#divRight").css({height: height + "px", width: (width * 0.75 - 17) + "px"});
  }

  load() {
    var that = this;
    $("#divS").on("mousedown", function (e) {
      that.sliderMoving = true;
      $("divP").css("cursor", "e-resize");
    });

    $("#divP").on("mousemove", function (e) {
      if (that.sliderMoving) {
        that.sliderGhostMoving(e);
      }
    });

    $("#divP").on("mouseup", function (e) {
      if (that.sliderMoving) {
        that.sliderMoving = false;
        that.sliderHorizontalMove(e);
        $("#divP").css("cursor", "default");
      }
    });
  }

  //分隔条幽灵左右拖动(mousemove)
  sliderGhostMoving(e) {
    $("#divSG").css({left: this.mousePosition(e).x - 2, display: "block"});
  };

  //兼容各种浏览器的,获取鼠标真实位置
  mousePosition(ev) {
    if (!ev) ev = window.event;
    if (ev.pageX || ev.pageY) {
      return {x: ev.pageX, y: ev.pageY};
    }
    return {
      x: ev.clientX + document.documentElement.scrollLeft - document.body.clientLeft,
      y: ev.clientY + document.documentElement.scrollTop - document.body.clientTop
    };
  };

  //完成分隔条左右拖动(mouseup)
  sliderHorizontalMove(e) {
    var lWidth = this.getElCoordinate($("#divSG")[0]).left - 2;
    if(lWidth>1500){
      lWidth = 1500;
    }

    var rWidth = $(window).width() - lWidth - 20;
    console.log('r', rWidth);

    $("#divLeft").css("width", lWidth + "px");
    $("#divRight").css("width", rWidth + "px");
    $("#divSG").css("display", "none");
  };

  //获取一个DIV的绝对坐标的功能函数,即使是非绝对定位,一样能获取到
  getElCoordinate(dom) {
    var t = dom.offsetTop;
    var l = dom.offsetLeft;
    dom = dom.offsetParent;
    while (dom) {
      t += dom.offsetTop;
      l += dom.offsetLeft;
      dom = dom.offsetParent;
    }
    ;
    return {top: t, left: l};
  };


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
