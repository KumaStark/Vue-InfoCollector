<template>
  <el-row>
    <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="14">
      <h2><center>请您告诉我们准备返回的时间和方式</center></h2>
      <el-form
        :model="infoCollector"
        :rules="rules"
        ref="infoCollector"
        label-width="100px"
      >
        <el-form-item label="您的姓名" prop="name">
          <el-select
            v-model="infoCollector.name"
            placeholder="请选择您的名字"
            style="width: 100%;"
          >
            <el-option
              v-for="(item, index) in nameList"
              :key="index"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-row>
          <el-col :span="11">
            <el-form-item label="出行方式" prop="tripMode">
              <el-radio-group v-model="infoCollector.tripMode">
                <el-radio-button label="飞机"></el-radio-button>
                <el-radio-button label="火车"></el-radio-button>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="出行地点" prop="tripPort">
              <el-select
                style="width: 100%;"
                :disabled="tripPortSwitch"
                v-model="infoCollector.tripPort"
                placeholder="请选择火车站或机场名称"
              >
                <el-option
                  label="上海火车站"
                  value="上海火车站"
                  v-if="transTool == '火车'"
                ></el-option>
                <el-option
                  label="上海南站"
                  value="上海南站"
                  v-if="transTool == '火车'"
                ></el-option>
                <el-option
                  label="上海虹桥火车站"
                  value="上海虹桥火车站"
                  v-if="transTool == '火车'"
                ></el-option>
                <el-option
                  label="上海浦东国际机场"
                  value="上海浦东国际机场"
                  v-if="transTool == '飞机'"
                ></el-option>
                <el-option
                  label="上海虹桥国际机场"
                  value="上海虹桥国际机场"
                  v-if="transTool == '飞机'"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="航班车次" prop="tripNumber">
          <el-input
            v-model="infoCollector.tripNumber"
            placeholder="请输入您乘坐的航班号或者列车车次"
          ></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item label="出发日期" prop="leaveDate">
              <el-date-picker
                type="date"
                placeholder="选择一个日期"
                v-model="infoCollector.leaveDate"
                :picker-options="pickerOptions"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="出发时间" prop="leaveTime">
              <el-time-picker
                placeholder="选择一个时间"
                v-model="infoCollector.leaveTime"
                style="width: 100%;"
              ></el-time-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="备注信息" prop="desc">
          <el-input type="textarea" v-model="infoCollector.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('infoCollector')"
            >确认信息</el-button
          >
          <el-button @click="resetForm('infoCollector')">重新填写</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
</template>

<script>
import axios from "axios";
document.title = "行程收集表";
export default {
  watch: {
    "infoCollector.tripMode": {
      handler(newValue) {
        console.log("get tripMode change:", newValue);
        if (newValue != "") {
          this.tripPortSwitch = false;
          this.transTool = newValue;
        } else {
          this.tripPortSwitch = true;
        }
      },
      deep: true
    }
  },
  data() {
    return {
      tripPortSwitch: true,
      nameList: [
        "姚明"
      ],
      transTool: "",
      pickerOptions: {
        shortcuts: [
          {
            text: "选择今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "选择明天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "选择后天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 48);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      infoCollector: {
        name: "",
        tripMode: "",
        tripPort: "",
        tripNumber: "",
        leaveDate: new Date(),
        leaveTime: "",
        desc: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "请在列表中选择您的名字",
            trigger: "change"
          }
        ],
        tripMode: [
          { required: true, message: "请选择一个出行方式", trigger: "change" }
        ],
        tripPort: [
          {
            required: true,
            message: "请选择您出行的交通枢纽站点",
            trigger: "change"
          }
        ],
        tripNumber: [
          {
            required: true,
            message: "请输入您乘坐的航班号或者列车车次",
            trigger: "blur"
          }
        ],
        leaveDate: [
          {
            type: "date",
            required: true,
            message: "请选择航班起飞或车次出发日期",
            trigger: "change"
          }
        ],
        leaveTime: [
          {
            type: "date",
            required: true,
            message: "请选择航班起飞或车次出发时间",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
          let infoData = new FormData(this.infoCollector);
          console.log(this.infoCollector);
          for (let key in this.infoCollector) {
            // console.log(key);
            infoData.append(key, this.infoCollector[key]);
            // infoData.append("t1", "c1");
          }
          // console.log(infoData.getAll());
          axios({
            method: "post",
            url: "/postForm",
            headers: {
              "Content-Type": "multipart/form-data"
            },
            // withCredentials: true,
            data: infoData
          })
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });

          this.$alert("谢谢！您辛苦了！", "信息已保存", {
            confirmButtonText: "确定"
            // callback: action => {
            //   this.$message({
            //     type: "info",
            //     message: `action: ${action}`
            //   });
            // }
          });

          // this.$router.push("Thanks");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple {
  background: #ffffff;
}
</style>
