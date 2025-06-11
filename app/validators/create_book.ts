import vine from "@vinejs/vine";

/**membuat validasi untuk buku baru */
export const createBookValidator = vine.compile(
    vine.object ({
         title: vine.string().trim().minLength(3).maxLength(255),
         author: vine.string().trim().minLength(3).maxLength(255),
         category: vine.string().trim().minLength(3).maxLength(255),
         date: vine.date(),
         image: vine.string().trim().minLength(3).maxLength(255),
    })
)

/**Validasi untuk memperbaharui buku */

export const updateBookValidator = vine.compile(
    vine.object({
       title: vine.string().trim().minLength(3).maxLength(5).optional(),
       author: vine.string().trim().minLength(3).maxLength(5).optional(),
    })
)

/**Validasi untuk menghapus buku */

export const deleteBookValidator = vine.compile(
    vine.object({
        params: vine.object({
            id: vine.number().positive(),
        })
    })
)
