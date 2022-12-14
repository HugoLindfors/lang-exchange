import { reactive } from "vue";

export const store = reactive({
    users: [
        {
            id: "I5Cq4hWhrfYwhqFYoVIBRPnVTUx1",
            username: "hugo.lindfors",
            displayName: "Hugo Lindfors",
            score: -1,
            contact: [
                {
                    place: "discord",
                    username: "Neutron#9334",
                }
            ],
            languages: [
                {
                    name: "swedish/svenska",
                    lvl: "native"
                },
                {
                    name: "english",
                    lvl: "advanced"
                },
                {
                    name: "finnish/suomi",
                    lvl: "intermediate"
                },
                {
                    name: "german/deutsch",
                    lvl: "intermediate"
                },
            ]
        },
        {
            id: "Cs4i1KKHGgaRBHFVLYGo4iHhAQ22",
            username: "sebastian.jensen",
            displayName: 'Sebastian Jensen',
            score: 1,
            contact: [
                {
                    place: "discord",
                    username: "Sebastian.Jensen#9648",
                }
            ],
            languages: [
                {
                    name: "swedish/svenska",
                    lvl: "native"
                },
                {
                    name: "english",
                    lvl: "advanced"
                },
                {
                    name: "japanese/日本語",
                    lvl: "intermediate"
                },
                {
                    name: "german/deutsch",
                    lvl: "beginner"
                },
            ]
        },
        {
            id: "I5Cq4hWhrfYwhqFYoVIBRPnVTUx1",
            username: "hugo.lindfors.2",
            displayName: "Hugo Lindfors",
            score: -1,
            contact: [
                {
                    place: "email",
                    username: "hugo.lindfors@elev.ga.ntig.se",
                }
            ],
            languages: [
                {
                    name: "swedish/svenska",
                    lvl: "native"
                },
                {
                    name: "english",
                    lvl: "advanced"
                },
                {
                    name: "finnish/suomi",
                    lvl: "intermediate"
                },
                {
                    name: "german/deutsch",
                    lvl: "intermediate"
                },
            ]
        },
    ],
})