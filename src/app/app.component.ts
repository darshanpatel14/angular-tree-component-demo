import { Component, VERSION, NgZone } from '@angular/core';
import {
  IActionMapping,
  KEYS,
  TreeModel,
  TreeNode,
  TREE_ACTIONS,
  ITreeOptions,
} from '@circlon/angular-tree-component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  selectedNodeSet = new Set([6]);
  nodes = [
    {
      id: 0,
      name: 'a2 b2',
      mailBoxType: 'private',
      type: 'mailbox',
      children: [
        {
          id: 1,
          name: 'Inbox',
          type: 'folder',
          mailBoxType: 'private',
          docCount: 0,
          children: [],
          userName: 'testing_09@yopmail.com',
        },
        {
          id: 2,
          name: 'Deleted Items',
          type: 'folder',
          mailBoxType: 'private',
          docCount: 0,
          children: [],
          userName: 'testing_09@yopmail.com',
        },
      ],
      userName: 'testing_09@yopmail.com',
    },
    {
      id: 1668245362986,
      name: 'Exception / Archive Shared Mail box',
      mailBoxType: 'private',
      type: 'label',
      userName: 'label',
      children: [],
    },
    {
      id: '1667980463171',
      name: 'Not My Mail',
      type: 'mailbox',
      children: [
        {
          id: '1667980463172',
          name: 'Inbox',
          type: 'folder',
          docCount: 0,
          children: [],
          userName: 'shared_not_my_mail_1667980463172',
        },
        {
          id: '1667980463173',
          name: 'Deleted Items',
          type: 'folder',
          docCount: 0,
          children: [],
          userName: 'shared_not_my_mail_1667980463172',
        },
      ],
      inboxType: 'default',
      userName: 'shared_not_my_mail_1667980463172',
    },
    {
      id: 1667980517455,
      name: 'Deactivated User',
      type: 'mailbox',
      children: [
        {
          id: '0e2ec701-0690-466a-a3ce-104fab229bf0',
          name: 'd5 p5_deactivated',
          mailBoxType: 'private',
          type: 'Folder',
          children: [
            {
              id: '406d584b-bafb-472a-9cb0-b7291c48cedb',
              name: 'Inbox',
              type: 'Folder',
              mailBoxType: 'private',
              docCount: 0,
              children: [],
              userName: 'shared_deactivated_users_1667980517455',
            },
            {
              id: '079c09bc-73b4-48a9-bf16-0daa52623c78',
              name: 'Deleted Items',
              type: 'Folder',
              docCount: 0,
              mailBoxType: 'private',
              children: [],
              userName: 'shared_deactivated_users_1667980517455',
            },
          ],
          isDeactivated: true,
          isShared: true,
          userName: 'shared_deactivated_users_1667980517455',
        },
        {
          id: '82e033f8-a265-4994-823d-944d53796075',
          name: 'd6 b6_deactivated',
          mailBoxType: 'private',
          type: 'Folder',
          children: [
            {
              id: '4c6753ba-2320-4a2e-b615-7e3955c34bd0',
              name: 'Inbox',
              type: 'Folder',
              mailBoxType: 'private',
              docCount: 0,
              children: [],
              userName: 'shared_deactivated_users_1667980517455',
            },
            {
              id: 'cb5898ac-9c4b-4ad3-a92a-2d469fbfb168',
              name: 'Deleted Items',
              type: 'Folder',
              docCount: 0,
              mailBoxType: 'private',
              children: [],
              userName: 'shared_deactivated_users_1667980517455',
            },
          ],
          isDeactivated: true,
          isShared: true,
          userName: 'shared_deactivated_users_1667980517455',
        },
        {
          id: '9d5b78fd-42a7-4531-aaf8-d1c4e7d21386',
          name: 'd9 b9_deactivated',
          mailBoxType: 'private',
          type: 'Folder',
          children: [
            {
              id: '3dd49171-b820-4f17-9173-896716ef1f8c',
              name: 'Inbox',
              type: 'Folder',
              mailBoxType: 'private',
              docCount: 0,
              children: [],
              userName: 'shared_deactivated_users_1667980517455',
            },
            {
              id: 'f5ca03ed-ccf8-4953-8dc6-e4c165fddf5f',
              name: 'Deleted Items',
              type: 'Folder',
              docCount: 0,
              mailBoxType: 'private',
              children: [],
              userName: 'shared_deactivated_users_1667980517455',
            },
          ],
          isDeactivated: true,
          isShared: true,
          userName: 'shared_deactivated_users_1667980517455',
        },
        {
          id: '4e41033a-2cfe-4124-9f16-b1eb6a7cdc78',
          name: 'd7 b7_deactivated',
          mailBoxType: 'private',
          type: 'Folder',
          children: [
            {
              id: 'ac1fc376-e246-44c6-84cb-c06a6fe32e0f',
              name: 'Inbox',
              type: 'Folder',
              mailBoxType: 'private',
              docCount: 0,
              children: [],
              userName: 'shared_deactivated_users_1667980517455',
            },
            {
              id: '938f6633-c29d-48cd-9241-c26424c36614',
              name: 'Deleted Items',
              type: 'Folder',
              docCount: 0,
              mailBoxType: 'private',
              children: [],
              userName: 'shared_deactivated_users_1667980517455',
            },
          ],
          isDeactivated: true,
          isShared: true,
          userName: 'shared_deactivated_users_1667980517455',
        },
      ],
      inboxType: 'default',
      userName: 'shared_deactivated_users_1667980517455',
    },
    {
      id: 1667980517463,
      name: 'Undeliverable Mail',
      type: 'mailbox',
      children: [
        {
          id: '1667980517464',
          name: 'Inbox',
          type: 'folder',
          docCount: 0,
          mailBoxType: 'private',
          children: [],
          userName: 'shared_undeliverable_mails_1667980517463',
        },
        {
          id: '1667980517465',
          name: 'Deleted Items',
          type: 'folder',
          docCount: 0,
          mailBoxType: 'private',
          children: [],
          userName: 'shared_undeliverable_mails_1667980517463',
        },
      ],
      inboxType: 'default',
      userName: 'shared_undeliverable_mails_1667980517463',
    },
  ];
  actionMapping: IActionMapping = {
    mouse: {
      contextMenu: (tree, node, $event) => {
        $event.preventDefault();
      },
      checkboxClick: (tree, node: TreeNode, $event) => {
        $event.stopPropagation();
        node.toggleSelected();
        if (this.selectedNodeSet.has(node.id)) {
        }
      },
      dblClick: (tree, node, $event) => {
        if (node.hasChildren) {
          TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
        }
      },
      click: (tree: TreeModel, node: TreeNode, $event) => {},
      expanderClick: (tree, node: TreeNode, $event) => {
        TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
      },
    },
    keys: {
      [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`),
    },
  };
  public treeOptions: ITreeOptions = {
    actionMapping: this.actionMapping,
    useCheckbox: true,
  };

  constructor(private ngZone: NgZone) {}

  update() {
    const temp = JSON.parse(JSON.stringify(this.nodes));
    temp[0].name = 'after update root1';
    this.nodes = temp;
  }
}
