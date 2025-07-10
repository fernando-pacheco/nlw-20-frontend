import { Navigate, useParams } from "react-router-dom"

type RoomParams = {
    roomID: string
}

function Room() {
    const params = useParams<RoomParams>()

    if (!params.roomID) {
        return <Navigate to="/" replace />
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="flex flex-col text-2xl font-bold justify-center items-center">
                    Room Details
                    <span>{params.roomID}</span>
                </h1>
            </div>
        </div>
    )
}

export { Room }
