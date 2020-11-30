const Author = (authorModel) => {
    return Object.freeze({
        id : authorModel.id,
        name : authorModel.name
    })
}

const Authors = (authors) => {
    return authors.map(authorModel => Author(authorModel))
}

module.exports = {
    Author,
    Authors
}