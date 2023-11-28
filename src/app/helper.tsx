import React from "react"

export const storeInLocalStorage = (key: string, value: string) => {
    let getItems = localStorage.getItem(key)
    let items = [value]
    if (getItems) {
        items = [...JSON.parse(getItems), value] 
    }
    localStorage.setItem(key, JSON.stringify(items))
}
