const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export type FetchOptions = RequestInit & {
    cache?: RequestCache;
}

async function fetchApi<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
    try {
        const res = await fetch(`${baseUrl}${endpoint}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        })

        if (!res.ok) {
            throw new Error(`API error: ${res.status} ${res.statusText}`)
        }

        return res.json()
    } catch (error) {
        console.error('API request failed:', error)
        throw error
    }
}

export interface Project {
    id: number
    title: string
    subtitle: string
    description: string
    imageSrc?: string
    link?: string
    github?: string
}

export const api = {
    getProjects: () => fetchApi<Project[]>('/api/projects', { cache: 'no-store' }),
} 