var connection = require("../database/connection");

class CommentsController{
    async createComment(request, response){
        try {
            let message = request.body.message;
            await connection('comments').insert({ comment: message }).then(function (result) {
                response.status(200).json({
                    success: true,
                    id: result[0],
                    message
                });
            })
        } catch (err) {
            response.status(400).json({
                success: false,
                error: "Ocorreu um erro. " + err,
            });
        }
    }

    async readComments(request, response){
        try {
            let comments = await connection('comments').select('*').orderBy('id', 'asc');
            response.status(302).json({
                success: true,
                comments: comments
            });
        } catch (err) {
            response.status(404).json({
                success: false,
                error: "Ocorreu um erro. " + err,
            });
        }
    }

}

module.exports = CommentsController;