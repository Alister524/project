export const getPagePost = (totalCount, limit) =>{
    return Math.ceil(totalCount / limit);       //что бы остаток постов не удалять, а выводить на 11-ую страницу. Ceil - для округления в бОльшую сторону целого числа
}

export const getPagesPost = (totalPages) =>{
    const result = []
    for(let i =0; i < totalPages; i++){
        result.push (i + 1)
    }
    return result
}