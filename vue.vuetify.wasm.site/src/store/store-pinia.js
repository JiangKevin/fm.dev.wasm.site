// auth.js
import { defineStore, acceptHMRUpdate } from "pinia";
import { reactive, ref } from "vue";

export const useWasmNodes = defineStore("wasm_nodes_used", {
  state: () => {
    return {
      d_nodes_gather: reactive([]),
      d_index_increment: -1,
      d_select_edit_index: -1,
    };
  },
  actions: {
    increment_of_nodes_gather(uuid_str, obj) {
      var wasm_node_insert = {};
      this.d_index_increment += 1;
      wasm_node_insert.index_id = "#" + this.d_index_increment;
      wasm_node_insert.uuid = uuid_str;
      wasm_node_insert.type = obj.type;
      wasm_node_insert.isTexRepeat = obj.isTexRepeat;
      wasm_node_insert.img = obj.img;
      wasm_node_insert.url = obj.url;
      wasm_node_insert.node_type = obj.node_type;
      wasm_node_insert.node_class = "3D Node";
      wasm_node_insert.name = obj.name;
      wasm_node_insert.quote = false;
      wasm_node_insert.referenceds = [];
      wasm_node_insert.selected = false;
      wasm_node_insert.creat_date = timestampToTime();
      wasm_node_insert.icon = obj.icon;
      wasm_node_insert.describe = "";
      wasm_node_insert.tl_create = false;
      /** 位置 */
      var i_location = {};
      i_location.x = 0;
      i_location.y = 0;
      i_location.z = 0;
      wasm_node_insert.location = i_location;
      /** 角度 */
      var i_direction = {};
      i_direction.x = 0;
      i_direction.y = 0;
      i_direction.z = 0;
      wasm_node_insert.direction = i_direction;
      /** 颜色 */
      var i_fillcolor = {};
      i_fillcolor.r = 0;
      i_fillcolor.g = 0;
      i_fillcolor.b = 0;
      i_fillcolor.a = 0;
      i_fillcolor.hexa = "#00000000";
      wasm_node_insert.fillcolor = i_fillcolor;
      /** */
      this.d_nodes_gather.push(wasm_node_insert);
    },
    current_item_of_gather() {
      if (this.d_select_edit_index != -1) {
        return this.d_nodes_gather[this.d_select_edit_index];
      } else {
        return this.d_nodes_gather[0];
      }
    },
  },
});

// // 确保传递正确的 store 声明，本例中为 `useAuth`
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWasmNodes, import.meta.hot));
}
/** */
var wasm_obj_resouse = [
  {
    uuid: "E29DB78B-6EAA-49B2-806B-60B35C93357E",
    name: "Industry Square of XJH",
    is_expand: false,
    type: "Square",
    node_type: "fbx",
    isTexRepeat: true,
    importFlags: [
      "aiProcess_CalcTangentSpace",
      "aiProcess_GenNormals",
      "aiProcess_Triangulate",
      "aiProcess_SortByPType",
    ],
    creat_date: "2020-10-11",
    icon: "",
    img: "./static/res/img/1693191131721.jpg",
    url: "./data/original3D/blg-dmgc.FBX",
    describe:
      "Collection of best designed, highly customizable, & developer’s friendly VueJS Admin Dashboard Templates for your next project. Download these templates and boost your development skills.",
  },
  {
    uuid: "E29DB78B-6EAA-49B2-806B-60B35C93357E",
    name: "Industry Square of XJH",
    is_expand: false,
    type: "Square",
    node_type: "fbx",
    importFlags: ["aiProcess_Triangulate", "aiProcess_RemoveComponent"],
    isTexRepeat: true,
    creat_date: "2020-10-11",
    icon: "",
    img: "./static/res/img/img_lights.jpg",
    url: "./data/original3D/ld-dmgc-1.fbx",
    describe:
      "Collection of best designed, highly customizable, & developer’s friendly VueJS Admin Dashboard Templates for your next project. Download these templates and boost your development skills.",
  },
  {
    uuid: "E29DB78B-6EAA-49B2-806B-60B35C933578",
    name: "Industry Square of BLG",
    is_expand: false,
    type: "Square",
    node_type: "fbx",
    importFlags: ["aiProcess_Triangulate", "aiProcess_RemoveComponent"],
    isTexRepeat: true,
    creat_date: "2020-10-11",
    icon: "",
    img: "./static/res/img/img_lights.jpg",
    url: "./data/original3D/ld-dmgc.FBX",
    describe:
      "Collection of best designed, highly customizable, & developer’s friendly VueJS Admin Dashboard Templates for your next project. Download these templates and boost your development skills.",
  },
  {
    uuid: "E29DB78B-6EAA-49B2-806B-60B35C93357E",
    name: "Industry Square of XJH",
    is_expand: false,
    type: "Square",
    node_type: "fbx",
    importFlags: ["aiProcess_Triangulate", "aiProcess_RemoveComponent"],
    isTexRepeat: true,
    creat_date: "2020-10-11",
    icon: "",
    img: "./static/res/img/img_lights.jpg",
    url: "./data/original3D/ld-dmgc.FBX",
    describe:
      "Collection of best designed, highly customizable, & developer’s friendly VueJS Admin Dashboard Templates for your next project. Download these templates and boost your development skills.",
  },
  {
    uuid: "E29DB78B-6EAA-49B2-806B-60B35C93357E",
    name: "Industry Square of XJH",
    is_expand: false,
    type: "Square",
    node_type: "fbx",
    importFlags: ["aiProcess_Triangulate", "aiProcess_RemoveComponent"],
    isTexRepeat: true,
    creat_date: "2020-10-11",
    icon: "",
    img: "./static/res/img/img_lights.jpg",
    url: "./data/original3D/ld-dmgc.FBX",
    describe:
      "Collection of best designed, highly customizable, & developer’s friendly VueJS Admin Dashboard Templates for your next project. Download these templates and boost your development skills.",
  },
  {
    uuid: "E29DB78B-6EAA-49B2-806B-60B35C93357E",
    name: "Industry Square of XJH",
    is_expand: false,
    type: "Square",
    node_type: "fbx",
    importFlags: ["aiProcess_Triangulate", "aiProcess_RemoveComponent"],
    isTexRepeat: true,
    creat_date: "2020-10-11",
    icon: "",
    img: "./static/res/img/img_lights.jpg",
    url: "./data/original3D/ld-dmgc.FBX",
    describe:
      "Collection of best designed, highly customizable, & developer’s friendly VueJS Admin Dashboard Templates for your next project. Download these templates and boost your development skills.",
  },
];

export const wasm_obj_res = defineStore("wasm_obj_res", {
  state: () => {
    return {
      obj_res: wasm_obj_resouse,
    };
  },
  actions: {},
});

/** */
var tl_data_rows = [
  {
    id: "#-1691564204887",
    title: "#-1691564204887",
    bind_object: {
      uuid: "",
      name: "",
    },
    selected: false,
    draggable: true,

    style: {
      height: 24,
      fillColor: "#252526",
      legend: {},
      groupsStyle: {
        height: 24,
        marginTop: "auto",
        fillColor: "#FFC107",
      },
      keyframesStyle: {
        shape: "rhomb",
        width: 10,
        height: 10,
        fillColor: "#0413B9",
        selectedFillColor: "#F44336",
      },
    },
    keyframes: [
      {
        uuid: "FF243857-854F-49FD-AA88-6417CFD6DB91",
        val: 1000,
        min: 0,
        max: 1000000,
        animation: "00 - EASE_NONE",
        selected: true,
      },
      {
        uuid: "358396A4-6DFA-4E2D-96CF-826E58630673",
        val: 2000,
        min: 0,
        max: 1000000,
        animation: "00 - EASE_NONE",
      },
    ],
  },
];
/** 可编辑对象 */
var NewRow_template = {
  id: "#-1691484560194",
  title: "test1",
  bind_object: {
    uuid: "",
    name: "",
  },
  selected: false,
  draggable: true,
  style: {
    height: 24,
    fillColor: "#252526",
    legend: {},
    groupsStyle: {
      height: 24,
      marginTop: "auto",
      fillColor: "#FFC107",
    },
    keyframesStyle: {
      shape: "rhomb",
      width: 10,
      height: 10,
      fillColor: "#0413B9",
      selectedFillColor: "#F44336",
    },
  },
  keyframes: [
    {
      uuid: "",
      val: 1000,
      animation: "00 - EASE_NONE",
      selected: false,
      min: 0,
      max: 1000,
    },
    {
      uuid: "",
      val: 2000,
      animation: "00 - EASE_NONE",
      selected: false,
      min: 1000,
      max: 2000,
    },
  ],
};

export const tl_drows = defineStore("tl", {
  state: () => {
    return {
      tl_rows: reactive([]),
    };
  },
  actions: {
    increment_of_tl_rows(obj) {
      if (obj.tl_create != true) {
        var tl_node_insert = JSON.parse(JSON.stringify(NewRow_template));
        tl_node_insert.id = "#-" + new Date().getTime().toString();
        tl_node_insert.title = obj.name;
        tl_node_insert.bind_object.uuid = obj.uuid;
        tl_node_insert.bind_object.name = obj.name;
        this.tl_rows.push(tl_node_insert);
        // console.log("From js:increment_of_tl_rows");
        // console.log(tl_node_insert);
        //
        obj.tl_create = true;
      }
    },
  },
});
