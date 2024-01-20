import { useContext, useEffect, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { getRequest, baseUrl } from "../utils/services"

export const useFetchLatestMessage = (chat) => {
    const {newMessage, notifications} = useContext(ChatContext)
    const [latestMessage, setLatestMessage] = useState(null)

    useEffect(() => {
        const getMessage = async() => {
            const response = await getRequest(`${baseUrl}/messages/${chat?._id}`)

            if (response.error) {
                return console.log("Error getting messages...", error)
            }

            const  lastMessage = response[response?.length - 1]
            setLatestMessage(lastMessage)
        }

        getMessage()
    } [newMessage, notifications])

    return {latestMessage}
}