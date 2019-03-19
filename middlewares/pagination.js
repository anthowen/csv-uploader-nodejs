const models = require('../models');

const pagination = function(req, res, next) {
    var limit = parseInt(req.params.limit) || 20
    var page = parseInt(req.params.page) || 1,
        num = page * limit;

        models.CsvUserRow.count().then( c => {
            var pages = Math.ceil(c / limit);
            res.pagination = {
                total: c,
                pages: pages,
                limit: limit,
                page: page,
                offset: (page*limit) - limit,
                prev: (page != 1) ? true : false,
                next: !(num >= c) ? true : false,
            };
            next();
        });
}

module.exports = pagination;