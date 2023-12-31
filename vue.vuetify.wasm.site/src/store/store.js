import { defineStore, acceptHMRUpdate } from "pinia";
// import Module from "static/js/hmi_editer_web";
import { reactive, ref } from "vue";
// uuid生成函数
function uuidv4_UpperCase() {
  // 生成uuid
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16).toUpperCase();
  });
}
// 颜色色值转换函数
function colorRGBA2Hexa(rgb_str) {
  var a,
    isPercent,
    rgb = rgb_str
      .replace(/\s/g, "")
      .match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
    alpha = ((rgb && rgb[4]) || "").trim(),
    hex = rgb
      ? (rgb[1] | (1 << 8)).toString(16).slice(1) +
        (rgb[2] | (1 << 8)).toString(16).slice(1) +
        (rgb[3] | (1 << 8)).toString(16).slice(1)
      : rgb_str;

  if (alpha !== "") {
    a = alpha;
  } else {
    a = "01";
  }
  hex = hex + a;

  return "#" + hex;
}
// 调整当前颜色不同颜色转换的共通函数
function update_color_for_bring_in(obj) {
  let color_array = obj.rgba.match(/([0-9.]+)/g);
  if (color_array) {
    if (color_array.length == 4) {
      // rgba
      obj.r = color_array[0];
      obj.g = color_array[1];
      obj.b = color_array[2];
      obj.a = color_array[3];
      // hexa
      obj.hexa = colorRGBA2Hexa(obj.rgba);
    }
    if (color_array.length == 3) {
      // rgb
      obj.r = color_array[0];
      obj.g = color_array[1];
      obj.b = color_array[2];
      obj.a = 1;
      // hex
      obj.hexa = colorRGBA2Hexa(obj.rgba);
    }
  }
}

// 实现json数组排序
/*
    @function     JsonSort 对json排序
    @param        json     用来排序的json
    @param        key      排序的键值
*/
// 方法1
function JsonSort(json, key) {
  for (var j = 1, jl = json.length; j < jl; j++) {
    var temp = json[j],
      val = temp[key],
      i = j - 1;
    while (i >= 0 && json[i][key] > val) {
      json[i + 1] = json[i];
      i = i - 1;
    }
    json[i + 1] = temp;
  }
  //console.log(json);
  return json;
}
// 方法2
var sortBy = function (filed, rev, primer) {
  rev = rev ? -1 : 1;
  return function (a, b) {
    a = a[filed];
    b = b[filed];
    if (typeof primer != "undefined") {
      a = primer(a);
      b = primer(b);
    }
    if (a < b) {
      return rev * -1;
    }
    if (a > b) {
      return rev * 1;
    }
    return 1;
  };
};
// //数字排序
// obj.sort(sortBy('b', false, parseInt));
// console.log(obj);

// //字符排序
// obj.sort(sortBy('b', false, String));
// console.log(obj);

//
/**
 * 测试数据，后期用request 替代
 */
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

/**
 *
 * 模板数据 */
//
var tl_key_attributes_of_3D = {
  switch_render: true,
  render_face: true,
  render_wireframe: false,
  render_points: false,
  location: {
    x: 0,
    y: 0,
    z: 0,
  },
  direction: {
    x: 0,
    y: 0,
    z: 180,
  },
  fillcolor: {
    r: 255,
    g: 255,
    b: 255,
    a: 1,
    hexa: "#FFFFFFFF",
    rgba: "rgba(255,255,255,1)",
  },
  wireframe_fillcolor: {
    r: 255,
    g: 255,
    b: 255,
    a: 1,
    hexa: "#FFFFFFFF",
    rgba: "rgba(255,255,255,1)",
  },
  points_fillcolor: {
    r: 255,
    g: 255,
    b: 255,
    a: 1,
    hexa: "#FFFFFFFF",
    rgba: "rgba(255,255,255,1)",
  },
  draw_model: ["FACE", "WIREFRAME"],
};
//
var tl_key_attributes_of_Camera = {
  location: {
    x: 0,
    y: 0,
    z: 0,
  },
  direction: {
    x: 0,
    y: 0,
    z: 0,
  },
};
var tl_key_attributes_of_PL = {
  location: {
    x: 0,
    y: 0,
    z: 0,
  },
  direction: {
    x: 0,
    y: 0,
    z: 0,
  },
};
var tl_key_attributes_of_SL = {
  location: {
    x: 0,
    y: 0,
    z: 0,
  },
  direction: {
    x: 0,
    y: 0,
    z: 0,
  },
};
var tl_key_attributes_of_AL = {
  location: {
    x: 0,
    y: 0,
    z: 0,
  },
  direction: {
    x: 0,
    y: 0,
    z: 0,
  },
};
var tl_key_attributes_of_DL = {
  location: {
    x: 0,
    y: 0,
    z: 0,
  },
  direction: {
    x: 0,
    y: 0,
    z: 0,
  },
};
//
var new_tl_row_template = {
  id: "#-1691484560194",
  uuid: "",
  title: "test1",
  bind_object: {
    uuid: "",
    name: "",
    index_of_runtime_wasm_gather: -1, //预制动作执行前，遍历wasm对象，获取index，便于执行过程中定位
  },
  type: "3D",
  selected: false,
  draggable: true,
  loop_count: 1,
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
      animation: "EASE_NONE",
      selected: false,
      min: 0,
      max: 1000000,
      attributes: {},
    },
    {
      uuid: "",
      val: 2000,
      animation: "EASE_NONE",
      selected: false,
      min: 0,
      max: 1000000,
      attributes: {},
    },
  ],
};

/**
 * 实体 --------------------------------------只有一个实体
 */

export const store = defineStore("store", {
  state: () => {
    return {
      config_of_lights: reactive([]),
      config_of_camera: reactive([]),
      config_of_others: reactive([]),
      d_wasm_nodes_gather: reactive([]),
      d_wasm_nodes_gather_for_bind: reactive([]),
      d_tl_rows: reactive([]),
      d_wasm_res: wasm_obj_resouse, //
      d_wasm_add_index_increment: -1,
      d_wasm_select_edit_index: -1,
      d_tl_select_row_index: -1,
      d_tl_select_key_index: -1,
      d_wasm_light_count: -1,
      d_wasm_light_index: -1,
      is_creat_light_for_wasm: false,
      d_tl_object: undefined,
      d_wasm_module: undefined,
    };
  },
  /**getters */
  getters: {
    get_wasm_gather_for_bind(state) {
      state.d_wasm_nodes_gather_for_bind = [];
      for (var i = 0; i < state.d_wasm_nodes_gather.length; i++) {
        let wasm_node_insert_for_bind = {};
        wasm_node_insert_for_bind.uuid = state.d_wasm_nodes_gather[i].uuid;
        wasm_node_insert_for_bind.name = state.d_wasm_nodes_gather[i].name;
        state.d_wasm_nodes_gather_for_bind.push(wasm_node_insert_for_bind);
      }
      return state.d_wasm_nodes_gather_for_bind;
    },
  },
  /**actions */
  actions: {
    // 添加wasm nodes
    increment_of_wasm_nodes_gather(uuid_str, res_obj, importFlage) {
      var wasm_node_insert = {};
      this.d_wasm_add_index_increment += 1;
      wasm_node_insert.index_id =
        "#" + this.d_wasm_add_index_increment.toFixed(0).padStart(4, "0");
      wasm_node_insert.uuid = uuid_str;
      wasm_node_insert.type = res_obj.type;
      wasm_node_insert.isTexRepeat = res_obj.isTexRepeat;
      wasm_node_insert.img = res_obj.img;
      wasm_node_insert.url = res_obj.url;
      wasm_node_insert.node_type = res_obj.node_type;
      wasm_node_insert.node_class = "3D Node";
      wasm_node_insert.name = res_obj.name;
      wasm_node_insert.quote = false;
      wasm_node_insert.referenceds = [];
      wasm_node_insert.selected = false;
      wasm_node_insert.creat_date = timestampToTime();
      wasm_node_insert.icon = res_obj.icon;
      wasm_node_insert.describe = "";
      wasm_node_insert.tl_create = false;
      wasm_node_insert.importFlage = importFlage;
      wasm_node_insert.switch_render = true;
      wasm_node_insert.render_face = true;
      wasm_node_insert.render_wireframe = false;
      wasm_node_insert.render_points = false;
      wasm_node_insert.render_materials = true;
      //
      wasm_node_insert.draw_model = ["FACE", "WIREFRAME"];
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
      i_direction.z = 180;
      wasm_node_insert.direction = i_direction;
      /** 颜色 */
      var i_fillcolor = {};
      i_fillcolor.r = 255;
      i_fillcolor.g = 255;
      i_fillcolor.b = 255;
      i_fillcolor.a = 1;
      i_fillcolor.hexa = "#FFFFFFFF";
      i_fillcolor.rgba = "rgba(255,255,255,1)";
      wasm_node_insert.fillcolor = i_fillcolor;
      //
      var i_wireframe_color = {};
      i_wireframe_color.r = 255;
      i_wireframe_color.g = 255;
      i_wireframe_color.b = 255;
      i_wireframe_color.a = 1;
      i_wireframe_color.hexa = "#FFFFFFFF";
      i_wireframe_color.rgba = "rgba(255,255,255,1)";
      wasm_node_insert.wireframe_fillcolor = i_wireframe_color;
      //
      var i_points_color = {};
      i_points_color.r = 255;
      i_points_color.g = 255;
      i_points_color.b = 255;
      i_points_color.a = 1;
      i_points_color.hexa = "#FFFFFFFF";
      i_points_color.rgba = "rgba(255,255,255,1)";
      wasm_node_insert.points_fillcolor = i_points_color;
      /** */
      this.d_wasm_nodes_gather.push(wasm_node_insert);
      /** wasm insert */
      if (this.d_wasm_module) {
        this.d_wasm_module.cwrap("add_node_to_scenes", "", [
          "string",
          "string",
          "number",
          "number",
        ])(res_obj.url, uuid_str, res_obj.isTexRepeat, importFlage);
      }
    },
    // 返回当前编辑的wasm node
    current_wasm_item_of_gather() {
      if (
        this.d_wasm_nodes_gather.length == 0 ||
        this.d_wasm_select_edit_index == -1
      ) {
        return undefined;
      }
      //
      return this.d_wasm_nodes_gather[this.d_wasm_select_edit_index];
    },
    // 修改对应hexa的颜色
    change_color_for_bring_in(obj) {
      update_color_for_bring_in(obj);
    },
    // 删除当前的wasm 项
    delete_wasm_current_item(wasm_uuid) {
      if (this.d_wasm_select_edit_index != -1) {
        // 删除 tl 的绑定对应项
        if (this.d_wasm_nodes_gather[this.d_wasm_select_edit_index].tl_create) {
          for (var i = 0; i < this.d_tl_rows.length; i++) {
            if (
              this.d_tl_rows[i].bind_object.uuid ==
              this.d_wasm_nodes_gather[this.d_wasm_select_edit_index].uuid
            ) {
              this.d_tl_rows.splice(i, 1);
              this.d_tl_select_row_index = -1;
              this.d_tl_select_key_index = -1;
              break;
            }
          }
        }
        // 删除wasm nodes 对应项
        this.d_wasm_nodes_gather.splice(this.d_wasm_select_edit_index, 1);
        // 删除wasm moudel
        if (this.d_wasm_module) {
          this.d_wasm_module.cwrap("delete_node_from_scenes", "", ["string"])(
            wasm_uuid
          );
        }
        // 重置选中项
        this.d_wasm_select_edit_index = -1;
      }
    },
    // 获取wasm item 关联的tl row 信息
    current_tl_row_bind_for_wasm(uuid) {
      if (uuid) {
        for (var i = 0; i < this.d_tl_rows.length; i++) {
          if (this.d_tl_rows[i].bind_object.uuid == uuid) {
            var tl_row_info = {};
            tl_row_info.uuid = this.d_tl_rows[i].uuid;
            tl_row_info.id = this.d_tl_rows[i].id;
            tl_row_info.title = this.d_tl_rows[i].title;
            return tl_row_info;
          }
        }
      }
    },
    // 修改wasm item的名称时，同时修改对应的tl row bind 信息
    update_current_tl_row_bind_for_wasm(uuid, name) {
      if (uuid || name) {
        for (var i = 0; i < this.d_tl_rows.length; i++) {
          if (this.d_tl_rows[i].bind_object.uuid == uuid) {
            this.d_tl_rows[i].title = name;
            this.d_tl_rows[i].bind_object.name = name;
          }
        }
      }
    },
    refresh_tl_show() {
      // 刷新tl
      if (this.d_tl_object) {
        this.d_tl_object.rescale();
        this.d_tl_object.redraw();
      }
    },
    // 添加tl row
    increment_of_tl_rows(wasm_item, type) {
      if (wasm_item.tl_create != true) {
        var tl_node_insert = JSON.parse(JSON.stringify(new_tl_row_template));
        tl_node_insert.id = "#-" + new Date().getTime().toString();
        tl_node_insert.uuid = uuidv4_UpperCase();

        tl_node_insert.title = wasm_item.name;
        tl_node_insert.bind_object.uuid = wasm_item.uuid;
        tl_node_insert.bind_object.name = wasm_item.name;
        // type
        if (type == "3D Model") {
          tl_node_insert.type = "3D Model";
          tl_node_insert.keyframes[0].attributes = JSON.parse(
            JSON.stringify(tl_key_attributes_of_3D)
          );
          tl_node_insert.keyframes[1].attributes = JSON.parse(
            JSON.stringify(tl_key_attributes_of_3D)
          );
        }
        if (type == "Point Light") {
          tl_node_insert.type = "Point Light";
          tl_node_insert.keyframes[0].attributes = JSON.parse(
            JSON.stringify(tl_key_attributes_of_PL)
          );
          tl_node_insert.keyframes[1].attributes = JSON.parse(
            JSON.stringify(tl_key_attributes_of_PL)
          );
        }
        if (type == "Spot Light") {
          tl_node_insert.type = "Spot Light";
          tl_node_insert.keyframes[0].attributes = JSON.parse(
            JSON.stringify(tl_key_attributes_of_SL)
          );
          tl_node_insert.keyframes[1].attributes = JSON.parse(
            JSON.stringify(tl_key_attributes_of_SL)
          );
        }
        if (type == "Ambient Light") {
          tl_node_insert.type = "Ambient Light";
          tl_node_insert.keyframes[0].attributes = JSON.parse(
            JSON.stringify(tl_key_attributes_of_AL)
          );
          tl_node_insert.keyframes[1].attributes = JSON.parse(
            JSON.stringify(tl_key_attributes_of_AL)
          );
        }
        if (type == "Directiona Light") {
          tl_node_insert.type = "Directiona Light";
          tl_node_insert.keyframes[0].attributes = JSON.parse(
            JSON.stringify(tl_key_attributes_of_DL)
          );
          tl_node_insert.keyframes[1].attributes = JSON.parse(
            JSON.stringify(tl_key_attributes_of_DL)
          );
        }
        if (type == "Camera") {
          tl_node_insert.type = "Camera";
          tl_node_insert.keyframes[0].attributes = JSON.parse(
            JSON.stringify(tl_key_attributes_of_Camera)
          );
          tl_node_insert.keyframes[1].attributes = JSON.parse(
            JSON.stringify(tl_key_attributes_of_Camera)
          );
        }
        // 修改keys的uuid
        tl_node_insert.keyframes[0].uuid = uuidv4_UpperCase();
        tl_node_insert.keyframes[1].uuid = uuidv4_UpperCase();
        // 压入
        this.d_tl_rows.push(tl_node_insert);
        //
        wasm_item.tl_create = true;
        //   刷新tl
        this.refresh_tl_show();
      }
    },
    // 为选中的tl row 增加new key
    increment_of_select_row(keyTime) {
      if (this.d_tl_select_row_index == -1) {
        return;
      }
      /** 创建新的key对象 */
      console.log("keyTime is " + keyTime);
      let new_row_key = {};
      /**将当前tl的time点赋予新的key val */
      new_row_key.val = keyTime - 0;
      new_row_key.uuid = uuidv4_UpperCase();
      new_row_key.animation = "EASE_NONE";
      new_row_key.selected = false;
      new_row_key.min = 0;
      new_row_key.max = 1000000;
      // 添加附加属性
      if (this.d_tl_rows[this.d_tl_select_row_index].type == "3D Model") {
        new_row_key.attributes = JSON.parse(
          JSON.stringify(tl_key_attributes_of_3D)
        );
      }
      if (this.d_tl_rows[this.d_tl_select_row_index].type == "Camera") {
        new_row_key.attributes = JSON.parse(
          JSON.stringify(tl_key_attributes_of_Camera)
        );
      }
      if (this.d_tl_rows[this.d_tl_select_row_index].type == "Point Light") {
        new_row_key.attributes = JSON.parse(
          JSON.stringify(tl_key_attributes_of_PL)
        );
      }
      if (this.d_tl_rows[this.d_tl_select_row_index].type == "Spot Light") {
        new_row_key.attributes = JSON.parse(
          JSON.stringify(tl_key_attributes_of_SL)
        );
      }
      if (this.d_tl_rows[this.d_tl_select_row_index].type == "Ambient Light") {
        new_row_key.attributes = JSON.parse(
          JSON.stringify(tl_key_attributes_of_AL)
        );
      }
      if (
        this.d_tl_rows[this.d_tl_select_row_index].type == "Directiona Light"
      ) {
        new_row_key.attributes = JSON.parse(
          JSON.stringify(tl_key_attributes_of_DL)
        );
      }
      //
      this.d_tl_rows[this.d_tl_select_row_index].keyframes.push(new_row_key);
      // 进行排序，之后重新获取d_tl_select_key_index
      let old_keys = this.d_tl_rows[this.d_tl_select_row_index].keyframes;
      let new_keys = this.sort_by_val_for_tl_keys(old_keys);
      this.d_tl_rows[this.d_tl_select_row_index].keyframes = new_keys;
      for (var i = 0; i < new_keys.length; i++) {
        if (new_row_key.uuid == new_keys[i].uuid) {
          this.d_tl_select_key_index = i;
          break;
        }
      }
      // 刷新tl
      this.refresh_tl_show();
      //
    },
    // 返回当前tl row
    current_tl_row_item_of_gather() {
      if (this.d_tl_rows.length == 0 || this.d_tl_select_row_index == -1) {
        return undefined;
      }
      return this.d_tl_rows[this.d_tl_select_row_index];
    },
    // 返回当前tl row的当前key
    current_tl_key_item_of_gather() {
      if (
        this.d_tl_rows.length == 0 ||
        this.d_tl_select_row_index == -1 ||
        this.d_tl_select_key_index == -1
      ) {
        return undefined;
      }
      return this.d_tl_rows[this.d_tl_select_row_index].keyframes[
        this.d_tl_select_key_index
      ];
    },
    del_current_tl_key_item_of_gather() {
      if (
        this.d_tl_rows.length == 0 ||
        this.d_tl_select_row_index == -1 ||
        this.d_tl_select_key_index == -1 ||
        this.d_tl_rows[this.d_tl_select_row_index].keyframes.length == 2
      ) {
        return "The current keyframe cannot be deleted。";
      }
      //
      this.d_tl_rows[this.d_tl_select_row_index].keyframes.splice(
        this.d_tl_select_key_index,
        1
      );
      this.d_tl_select_key_index = -1;
      //   刷新tl
      this.refresh_tl_show();
    },
    del_current_tl_row_item_of_gather() {
      if (this.d_tl_rows.length == 0 || this.d_tl_select_row_index == -1) {
        return "The current row cannot be deleted。";
      }
      // 重置对应wasm obj 的预制动作创建标志
      for (var i = 0; i < this.d_wasm_nodes_gather.length; i++) {
        if (
          this.d_wasm_nodes_gather[i].uuid ==
          this.d_tl_rows[this.d_tl_select_row_index].bind_object.uuid
        ) {
          this.d_wasm_nodes_gather[i].tl_create = false;
          break;
        }
      }
      // 删除tl row
      this.d_tl_rows.splice(this.d_tl_select_row_index, 1);
      this.d_tl_select_row_index = -1;
      this.d_tl_select_key_index = -1;
      //   刷新tl
      this.refresh_tl_show();
    },
    copy_from_pre_to_current_attributes() {
      if (
        this.d_tl_rows.length == 0 ||
        this.d_tl_select_key_index == -1 ||
        this.d_tl_select_row_index == -1 ||
        this.d_tl_select_key_index == 0
      ) {
        return "The pre key cannot be copy";
      } else {
        this.d_tl_rows[this.d_tl_select_row_index].keyframes[
          this.d_tl_select_key_index
        ].attributes = JSON.parse(
          JSON.stringify(
            this.d_tl_rows[this.d_tl_select_row_index].keyframes[
              this.d_tl_select_key_index - 1
            ].attributes
          )
        );
      }
    },
    // wasm 全局设置期初
    configuration_creat() {
      if (this.is_creat_light_for_wasm == false) {
        this.config_of_lights = [];
        this.is_creat_light_for_wasm = true;
        /** 期初light */
        /* 
          点光源 */
        var p_light = {};
        p_light.name = "Point light";
        p_light.icon = "mdi mdi-lightbulb-on-90";
        p_light.type = "POINT";
        p_light.uuid = uuidv4_UpperCase();
        p_light.enable = true;
        p_light.legend = true;
        // 位置
        var p_location = {};
        p_location.x = 0;
        p_location.y = 0;
        p_location.z = 0;
        p_light.location = p_location;
        // 方位
        var p_direction = {};
        p_direction.x = 0;
        p_direction.y = 0;
        p_direction.z = 0;
        p_light.direction = p_direction;
        // 漫反射颜色
        var p_diffuse = {};
        p_diffuse.r = 255;
        p_diffuse.g = 255;
        p_diffuse.b = 255;
        p_diffuse.a = 255;
        p_diffuse.hexa = "#FFFFFFFF";
        p_diffuse.rgba = "rgba(255, 255, 255, 1)";
        p_light.diffuse_color = p_diffuse;
        // 镜面颜色
        var p_specular = {};
        p_specular.r = 255;
        p_specular.g = 255;
        p_specular.b = 255;
        p_specular.a = 255;
        p_specular.hexa = "#FFFFFFFF";
        p_specular.rgba = "rgba(255, 255, 255, 1)";
        p_light.specular_color = p_specular;
        // 环境颜色
        var p_ambient = {};
        p_ambient.r = 0;
        p_ambient.g = 0;
        p_ambient.b = 0;
        p_ambient.a = 255;
        p_ambient.hexa = "#000000FF";
        p_ambient.rgba = "rgba(0, 0, 0, 1)";
        p_light.ambient_color = p_ambient;
        // 衰减特性
        p_light.constant = 1.0;
        p_light.linear = 0.0;
        p_light.quadratic = 0.0;
        //注入
        this.config_of_lights.push(p_light);

        /* 
          运动光源 */
        var s_light = {};
        s_light.name = "Spot light";
        s_light.icon = "mdi mdi-light-flood-down";
        s_light.type = "SPOT";
        s_light.uuid = uuidv4_UpperCase();
        s_light.enable = false;
        s_light.legend = false;
        // 位置
        var s_location = {};
        s_location.x = 0;
        s_location.y = 0;
        s_location.z = 0;
        s_light.location = s_location;
        // 方位
        var s_direction = {};
        s_direction.x = 0;
        s_direction.y = 0;
        s_direction.z = 0;
        s_light.direction = s_direction;
        // 漫反射颜色
        var s_diffuse = {};
        s_diffuse.r = 255;
        s_diffuse.g = 255;
        s_diffuse.b = 255;
        s_diffuse.a = 255;
        s_diffuse.hexa = "#FFFFFFFF";
        s_diffuse.rgba = "rgba(255, 255, 255, 1)";
        s_light.diffuse_color = s_diffuse;
        // 镜面颜色
        var s_specular = {};
        s_specular.r = 255;
        s_specular.g = 255;
        s_specular.b = 255;
        s_specular.a = 255;
        s_specular.hexa = "#FFFFFFFF";
        s_specular.rgba = "rgba(255, 255, 255, 1)";
        s_light.specular_color = s_specular;
        // 环境颜色
        var s_ambient = {};
        s_ambient.r = 0;
        s_ambient.g = 0;
        s_ambient.b = 0;
        s_ambient.a = 255;
        s_ambient.hexa = "#000000FF";
        s_ambient.rgba = "rgba(0, 0, 0, 1)";
        s_light.ambient_color = s_ambient;
        // 衰减特性
        s_light.constant = 1.0;
        s_light.linear = 0.0;
        s_light.quadratic = 0.0;
        // 运动光源独有的特性
        s_light.spotCutOff = 45.0;
        s_light.exponent = 0.0;
        // 注入
        this.config_of_lights.push(s_light);
        /* 
          环境光源 */
        var a_light = {};
        a_light.name = "Ambient light";
        a_light.icon = "mdi mdi-theme-light-dark";
        a_light.type = "AMBIENT";
        a_light.uuid = uuidv4_UpperCase();
        a_light.enable = false;
        a_light.legend = false;
        // 位置
        var a_location = {};
        a_location.x = 0;
        a_location.y = 0;
        a_location.z = 0;
        a_light.location = a_location;
        // 方位
        var a_direction = {};
        a_direction.x = 0;
        a_direction.y = 0;
        a_direction.z = 0;
        a_light.direction = a_direction;
        // 漫反射颜色
        var a_diffuse = {};
        a_diffuse.r = 255;
        a_diffuse.g = 255;
        a_diffuse.b = 255;
        a_diffuse.a = 255;
        a_diffuse.hexa = "#FFFFFFFF";
        a_diffuse.rgba = "rgba(255, 255, 255, 1)";
        a_light.diffuse_color = a_diffuse;
        // 镜面颜色
        var a_specular = {};
        a_specular.r = 255;
        a_specular.g = 255;
        a_specular.b = 255;
        a_specular.a = 255;
        a_specular.hexa = "#FFFFFFFF";
        a_specular.rgba = "rgba(255, 255, 255, 1)";
        a_light.specular_color = a_specular;
        // 环境颜色
        var a_ambient = {};
        a_ambient.r = 0;
        a_ambient.g = 0;
        a_ambient.b = 0;
        a_ambient.a = 255;
        a_ambient.hexa = "#000000FF";
        a_ambient.rgba = "rgba(0, 0, 0, 1)";
        a_light.ambient_color = a_ambient;
        // 衰减特性
        a_light.constant = 1.0;
        a_light.linear = 0.0;
        a_light.quadratic = 0.0;
        // 环境光源特性
        a_light.surface_w = 100;
        a_light.surface_h = 100;
        // 注入
        this.config_of_lights.push(a_light);
        /* 
          平行光源 */
        var d_light = {};
        d_light.name = "Directiona light";
        d_light.icon = "mdi mdi-car-light-high";
        d_light.type = "DIRECTIONA";
        d_light.uuid = uuidv4_UpperCase();
        d_light.enable = false;
        d_light.legend = false;
        // 位置
        var d_location = {};
        d_location.x = 0;
        d_location.y = 0;
        d_location.z = 0;
        d_light.location = d_location;
        // 方位
        var d_direction = {};
        d_direction.x = 0;
        d_direction.y = 0;
        d_direction.z = 0;
        d_light.direction = d_direction;
        // 漫反射颜色
        var d_diffuse = {};
        d_diffuse.r = 255;
        d_diffuse.g = 255;
        d_diffuse.b = 255;
        d_diffuse.a = 255;
        d_diffuse.hexa = "#FFFFFFFF";
        d_diffuse.rgba = "rgba(255, 255, 255, 1)";
        d_light.diffuse_color = d_diffuse;
        // 镜面颜色
        var d_specular = {};
        d_specular.r = 255;
        d_specular.g = 255;
        d_specular.b = 255;
        d_specular.a = 255;
        d_specular.hexa = "#FFFFFFFF";
        d_specular.rgba = "rgba(255, 255, 255, 1)";
        d_light.specular_color = d_specular;
        // 环境颜色
        var d_ambient = {};
        d_ambient.r = 0;
        d_ambient.g = 0;
        d_ambient.b = 0;
        d_ambient.a = 255;
        d_ambient.hexa = "#000000FF";
        d_ambient.rgba = "rgba(0, 0, 0, 1)";
        d_light.ambient_color = d_ambient;
        // 注入
        this.config_of_lights.push(d_light);
        /** */
        this.d_wasm_light_count = 4;
        this.d_wasm_light_index = 0;

        /**期初camera */
        var camera = {};
        camera.uuid = uuidv4_UpperCase();
        camera.name = "main camera";
        // 位置
        var cam_location = {};
        cam_location.x = 0;
        cam_location.y = 0;
        cam_location.z = 100;
        camera.location = cam_location;
        // 方位
        var cam_direction = {};
        cam_direction.x = 0;
        cam_direction.y = 0;
        cam_direction.z = 0;
        camera.direction = cam_direction;
        //
        camera.nearClip = 0;
        camera.farClip = 10000;
        camera.inertia = false;
        camera.translationKey = 118;
        camera.mouseInput = false;
        camera.mouseMiddleButton = false;
        //
        this.config_of_camera = camera;

        /**期初others */
        var others = {};
        others.is_debug = true;
        others.is_lua = false;
        others.is_native_ui = false;
        others.enble_horizontal_view_change = true;
        others.view_horizontal_sensitivity = 120;
        others.enble_vertical_view_change = false;
        others.view_vertical_sensitivity = 45;
        others.move_interval = 200;
        others.speed_of_sports = 0.2;
        others.switch_acceleration=false

        var drive_keys = {};
        drive_keys.i_left_key = 97;
        drive_keys.i_right_key = 100;
        drive_keys.i_forward_key = 119;
        drive_keys.i_backward_key = 115;
        drive_keys.t_left_key = 57356;
        drive_keys.t_right_key = 57358;
        drive_keys.z_up_key = 57357;
        drive_keys.z_down_key = 57359;
        others.drive_keys = drive_keys;
        //
        this.config_of_others = others;
      }
      //
      /**第一次带入module */
      if (this.d_wasm_module == undefined && Module != undefined) {
        this.d_wasm_module = Module;
        console.log("From js: store wasm module created");
      }
      //  uuids拼接
      if (this.d_wasm_module) {
        var str_uuids =
          p_light.uuid +
          ":" +
          s_light.uuid +
          ":" +
          a_light.uuid +
          ":" +
          d_light.uuid;
        this.d_wasm_module.cwrap("beginning_light", "", ["string"])(str_uuids);
        this.d_wasm_module.cwrap("beginning_camera", "", [""])();
      }
    },
    // 排序tl keys 对象,用作预制工作执行前
    sort_by_val_for_tl_keys(tl_row_keys) {
      // 方法1
      //   var json = JsonSort(tl_row, "val");
      //   console.log(json);
      //   return json;

      // 方法2
      var json = JSON.parse(JSON.stringify(tl_row_keys));
      json.sort(sortBy("val", false, parseInt));
      return json;
    },
    // 清楚所有数据
    clear_data() {
      // wasm items
      if (this.d_wasm_nodes_gather.length != 0) {
        this.d_wasm_nodes_gather = [];
        this.d_select_edit_index = -1;
        this.d_index_increment = -1;
      }
      // tl items
      if (this.d_tl_rows.length != 0) {
        this.d_tl_rows = [];
        this.d_tl_select_row_index = -1;
        this.d_tl_select_key_index = -1;
      }
      // configs
      if (this.config_of_lights.length != 0) {
        this.config_of_lights = [];
        this.d_wasm_light_count = -1;
        this.d_wasm_light_index = -1;
        this.is_creat_light_for_wasm = false;
        this.configuration_creat();
      }
    },
  },
});
