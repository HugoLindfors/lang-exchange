import { reactive } from "vue";

export const store = reactive({
    users: [
        {
            id: "I5Cq4hWhrfYwhqFYoVIBRPnVTUx1",
            username: "hugo.lindfors",
            displayName: "Hugo Lindfors",
            userscore: 1,
            languages: [
                {
                    name: "swedish",
                    lvl: "native"
                },
                {
                    name: "english",
                    lvl: "advanced"
                },
                {
                    name: "finnish",
                    lvl: "intermediate"
                },
                {
                    name: "german",
                    lvl: "intermediate"
                },
            ]
        },
        {
            id: "Cs4i1KKHGgaRBHFVLYGo4iHhAQ22",
            username: "sebastian.jensen",
            displayName: 'Sebastian "Sebbe" Jensen',
            userscore: 1,
            languages: [
                {
                    name: "swedish",
                    lvl: "native"
                },
                {
                    name: "english",
                    lvl: "advanced"
                },
                {
                    name: "japanese",
                    lvl: "intermediate"
                },
                {
                    name: "german",
                    lvl: "beginner"
                },
            ]
        },
    ]
})