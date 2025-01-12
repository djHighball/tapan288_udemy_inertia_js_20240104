import GuestLayout from "@/Layouts/GuestLayout"
import { Head } from "@inertiajs/react"
import { useMemo } from "react";

interface ErrorProps {
    status: number,
}

export default function Error({status}: ErrorProps) {
    const title = useMemo(() => {
        return (
            {
                404: "Page Not Found",
                403: "Forbidden",
            }[status] || "An Error Occurred"
        );
    });

    const description = useMemo(() => {
        return (
            {
                404: "The page you re looking for does not exist.",
                403: "You are not allowed to perform this action.",
            }[status] || "An Error Occurred"
        );
    });
    return (
        <GuestLayout>
            <Head title={title} />
            <div className="mb-4 font-medium text-sm text-red-600">
                {description}
            </div>

        </GuestLayout>
    )
}