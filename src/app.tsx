import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CreateRoom } from "./pages/create-room"
import { Room } from "./pages/room"

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
})

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CreateRoom />} />
                    <Route path="/room/:roomID" element={<Room />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export { App }
