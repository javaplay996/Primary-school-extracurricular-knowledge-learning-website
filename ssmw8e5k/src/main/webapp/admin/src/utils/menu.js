const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"知识分类","menuJump":"列表","tableName":"zhishifenlei"}],"menu":"知识分类管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"课外知识","menuJump":"列表","tableName":"kewaizhishi"}],"menu":"课外知识管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"试卷管理","tableName":"exampaper"}],"menu":"试卷管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"试题管理","tableName":"examquestion"}],"menu":"试题管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"学习资讯","tableName":"news"}],"menu":"系统管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"试卷列表","tableName":"exampaperlist"}],"menu":"考试管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"课外知识列表","menuJump":"列表","tableName":"kewaizhishi"}],"menu":"课外知识模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"错题本","tableName":"examfailrecord"},{"buttons":["查看"],"menu":"试卷列表","tableName":"exampaperlist"},{"buttons":["查看"],"menu":"考试记录","tableName":"examrecord"}],"menu":"考试管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"课外知识列表","menuJump":"列表","tableName":"kewaizhishi"}],"menu":"课外知识模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;
