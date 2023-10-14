const express = require("express");
const app = express();
const port = 3000; // 원하는 포트로 변경 가능

// hi API
app.get("/api/hi", (req, res) => {
    const responseData = {
        message: "안녕하세요, 클라이언트!"
    };
    res.json(responseData);
});

app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
