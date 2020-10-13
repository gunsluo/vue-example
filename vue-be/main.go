package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	engine := gin.New()
	uiRouter := engine.Group("/ui")
	uiRouter.Static("/", "./web/dist")

	apiRouter := engine.Group("/api")
	apiRouter.GET("/test", test)

	engine.Any("/", home)

	// Listen and serve on 0.0.0.0:8080
	engine.Run(":8080")
}

func test(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, gin.H{
		"version":  "1.0.0",
		"commit":   "xxx",
		"building": "dev"})
}

func home(ctx *gin.Context) {
	ctx.Redirect(http.StatusMovedPermanently, "/ui")
}
