import GuestLayout from "@/Layouts/GuestLayout"
import { Head } from "@inertiajs/react"

export default function Error() {
    return (
        <GuestLayout>
            <Head title="An error occurred" />
            <div className="mb-4 font-medium text-sm text-red-600">
                An Error Occurred
            </div>

        </GuestLayout>
    )
}