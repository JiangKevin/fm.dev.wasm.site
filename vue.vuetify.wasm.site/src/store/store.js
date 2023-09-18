import { defineStore, acceptHMRUpdate } from "pinia";
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

/**
 *
 * 模板数据 */
var new_tl_row_template = {
  id: "#-1691484560194",
  uuid: "",
  title: "test1",
  bind_object: {
    uuid: "",
    name: "",
  },
  type: "3D",
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
      max: 1000000,
    },
    {
      uuid: "",
      val: 2000,
      animation: "00 - EASE_NONE",
      selected: false,
      min: 0,
      max: 1000000,
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
    increment_of_wasm_nodes_gather(uuid_str, obj) {
      var wasm_node_insert = {};
      this.d_wasm_add_index_increment += 1;
      wasm_node_insert.index_id =
        "#" + this.d_wasm_add_index_increment.toFixed(0).padStart(4, "0");
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
      // POINT/WIREFRAME/FACE
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
      i_direction.z = 0;
      wasm_node_insert.direction = i_direction;
      /** 颜色 */
      var i_fillcolor = {};
      i_fillcolor.r = 0;
      i_fillcolor.g = 0;
      i_fillcolor.b = 0;
      i_fillcolor.a = 0;
      i_fillcolor.hexa = "#00000000";
      i_fillcolor.rgba = "rgba(0, 0, 0, 0)";
      wasm_node_insert.fillcolor = i_fillcolor;
      /** */
      this.d_wasm_nodes_gather.push(wasm_node_insert);
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
    delete_wasm_current_item() {
      console.log(this.d_wasm_nodes_gather[this.d_wasm_select_edit_index].uuid);

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
    // 添加tl row
    increment_of_tl_rows(wasm_item) {
      if (wasm_item.tl_create != true) {
        var tl_node_insert = JSON.parse(JSON.stringify(new_tl_row_template));
        tl_node_insert.id = "#-" + new Date().getTime().toString();
        tl_node_insert.uuid = uuidv4_UpperCase();
        tl_node_insert.type = "3D Model";
        tl_node_insert.title = wasm_item.name;
        tl_node_insert.bind_object.uuid = wasm_item.uuid;
        tl_node_insert.bind_object.name = wasm_item.name;
        // 修改keys的uuid
        tl_node_insert.keyframes[0].uuid = uuidv4_UpperCase();
        tl_node_insert.keyframes[1].uuid = uuidv4_UpperCase();
        // 压入
        this.d_tl_rows.push(tl_node_insert);
        //
        wasm_item.tl_create = true;
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
      new_row_key.animation = "00 - EASE_NONE";
      new_row_key.selected = false;
      new_row_key.min = 0;
      new_row_key.max = 1000000;
      //
      this.d_tl_rows[this.d_tl_select_row_index].keyframes.push(new_row_key);
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
    },
    del_current_tl_row_item_of_gather() {
      if (
        this.d_tl_rows.length == 0 ||
        this.d_tl_select_row_index == -1 ||
        this.d_tl_select_key_index == -1
      ) {
        return "The current row cannot be deleted。";
      }
      // 重置对应wasm obj 的预制动作创建标志
      for (var i = 0; i < this.d_wasm_nodes_gather.length; i++) {
        if (
          this.d_wasm_nodes_gather[i].uuid ==
          this.d_tl_rows[d_tl_select_row_index].bind_object.uuid
        ) {
          this.d_wasm_nodes_gather[i].tl_create = false;
          break;
        }
      }
      // 删除tl row
      this.d_tl_rows.splice(this.d_tl_select_row_index, 1);
      this.d_tl_select_row_index = -1;
      this.d_tl_select_key_index = -1;
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
      }
      //
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
