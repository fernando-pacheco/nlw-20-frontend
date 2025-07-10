import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/atoms/button"

type GetRoomsResponse = Array<{
    id: string
    name: string
}>

function CreateRoom() {
    const navigate = useNavigate()
    const { data, isLoading } = useQuery({
        queryKey: ["get-rooms"],
        queryFn: async () => {
            const response = await fetch("http://localhost:3333/rooms")
            const result: GetRoomsResponse = await response.json()

            return result
        },
    })

    function handleRoomNavigation(roomID: string) {
        navigate(`/room/${roomID}`)
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center flex-col gap-8">
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-2xl font-bold">Create Room</h1>
                <p className="text-gray-500">This feature is coming soon!</p>
            </div>
            <div>
                {isLoading ? (
                    <p>Loading rooms...</p>
                ) : (
                    <ul className="list-disc">
                        {data?.map((room) => (
                            <li key={room.id}>
                                <Button
                                    onClick={() =>
                                        handleRoomNavigation(room.id)
                                    }
                                    variant={"link"}
                                    key={room.id}
                                >
                                    {room.name}
                                </Button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export { CreateRoom }
