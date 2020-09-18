const Koa = require("koa");
const KoaBody = require("koa-body");
const Router = require("koa-router");
const fs = require("fs");
const path = require('path');
const statics = require("koa-static");
const app = new Koa();
const router = new Router();
const xlsx = require("node-xlsx");
const moment = require("moment");

let saveData = [];
const tableTitle = ["姓名","出行方式","出行枢纽","航班车次","出发日期","出发时间","备注信息"];
saveData.push(tableTitle);

app.use(statics(__dirname + "/dist"));

router.get("/", (ctx) => {
  ctx.body = fs.readFileSync("./dist/index.html");
});
router.post(
  "/postForm",
  KoaBody({
    multipart: true,
  }),
  postForm
);

app.use(router.routes());
app.listen(8080);

function postForm(ctx) {
  // console.log("Get Form:", ctx.request.body);
  let formData = ctx.request.body;
  // console.log("姓名：", formData.name);
  // console.log("方式：", formData.tripMode);
  // console.log("枢纽：", formData.tripPort);
  // console.log("班次：", formData.tripNumber);
  // console.log("日期：", moment(formData.leaveDate).format("YYYY-MM-DD"));
  // console.log("时间：", moment(formData.leaveTime).format("HH:mm"));
  // console.log("备注：", formData.desc);

  let xlsxData = [];
  xlsxData.push(formData.name);
  xlsxData.push(formData.tripMode);
  xlsxData.push(formData.tripPort);
  xlsxData.push(formData.tripNumber);
  xlsxData.push(moment(formData.leaveDate).format("YYYY-MM-DD"));
  xlsxData.push(moment(formData.leaveTime).format("HH:mm"));
  xlsxData.push(formData.desc);
  saveData.push(xlsxData);

  const xlsxFileName = path.join(
    __dirname,
    "TravelTable",
    "CollectedInfo.xlsx"
  );

  writeXlsx(saveData);

  function writeXlsx(datas) {
    let buffer = xlsx.build([
      {
        name: moment(new Date()).format("YYYYMMDD") + "记录",
        data: datas,
      },
    ]);
    fs.writeFileSync(xlsxFileName, buffer, { flag: "w" });
  }

  ctx.body = "form Received!";
}
