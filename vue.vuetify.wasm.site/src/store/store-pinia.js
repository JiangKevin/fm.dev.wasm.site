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
  getters: {
    // compute_select_fillcolor(state) {
    // }
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
      this.d_nodes_gather.push(wasm_node_insert);
    },
    current_item_of_gather() {
      if (this.d_select_edit_index != -1) {
        return this.d_nodes_gather[this.d_select_edit_index];
      } else {
        return this.d_nodes_gather[0];
      }
    },
    colorRGBA2Hexa(rgb_str) {
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
    },
    update_current_item_fillcolor() {
      if (this.d_select_edit_index != -1) {
        let current_item = this.d_nodes_gather[this.d_select_edit_index];
        let color_array = current_item.fillcolor.rgba.match(/([0-9.]+)/g);
        //
        if (color_array) {
          if (color_array.length == 4) {
            // rgba
            current_item.fillcolor.r = color_array[0];
            current_item.fillcolor.g = color_array[1];
            current_item.fillcolor.b = color_array[2];
            current_item.fillcolor.a = color_array[3];
            // hexa
            current_item.fillcolor.hexa = this.colorRGBA2Hexa(
              current_item.fillcolor.rgba
            );
          }
          if (color_array.length == 3) {
            // rgb
            current_item.fillcolor.r = color_array[0];
            current_item.fillcolor.g = color_array[1];
            current_item.fillcolor.b = color_array[2];
            current_item.fillcolor.a = 1;
            // hex
            current_item.fillcolor.hexa = this.colorRGBA2Hexa(
              current_item.fillcolor.rgba
            );
          }
        }
      }
      //
      //   console.log(this.d_nodes_gather);
    },
    delete_current_item() {
      if (this.d_select_edit_index != -1) {
        this.d_nodes_gather.splice(this.d_select_edit_index, 1);
        this.d_select_edit_index = -1;
      }
    },
    clear_data() {
      if (this.d_nodes_gather.length != 0) {
        this.d_nodes_gather = [];
        this.d_select_edit_index = -1;
        this.d_index_increment = -1;
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
      d_select_row_index: -1,
      d_select_key_index: -1,
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
        //
        obj.tl_create = true;
      }
    },
    clear_data() {
      if (this.tl_rows.length != 0) {
        this.tl_rows = [];
        this.d_select_row_index = -1;
        this.d_select_key_index = -1;
      }
    },
  },
});

export const configs_of_platform = defineStore("Config", {
  state: () => {
    return {
      config_of_lights: reactive([]),
      config_of_camera: reactive([]),
      d_wasm_light_count: -1,
      d_wasm_light_index: -1,
      is_creat_light_for_wasm: false,
    };
  },
  actions: {
    uuidv4_UpperCase() {
      // 生成uuid
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16).toUpperCase();
        }
      );
    },
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
        p_light.uuid = this.uuidv4_UpperCase();
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
        s_light.uuid = this.uuidv4_UpperCase();
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
        a_light.uuid = this.uuidv4_UpperCase();
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
        d_light.uuid = this.uuidv4_UpperCase();
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
      // console.log(this.config_of_lights)
    },
    clear_data() {
      console.log("From js: store pinia clear data")      
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
