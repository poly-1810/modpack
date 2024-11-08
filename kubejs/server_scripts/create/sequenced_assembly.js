ServerEvents.recipes(event => {
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: "kubejs:inert_transport_shard"
        },
        transitionalItem: {
            item: "kubejs:inert_combat_shard"
        },
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "kubejs:inert_combat_shard"
                    },
                    {
                        tag: "c:gold_plates"
                    }
                ],
                results: [
                    {
                        item: "kubejs:inert_transport_shard"
                    }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "kubejs:inert_combat_shard"
                    },
                    {
                        item: "endrem:cryptic_eye"
                    }
            ],
                results: [
                    {
                        item: "kubejs:inert_transport_shard"
                    }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "kubejs:inert_combat_shard"
                    },
                    {
                        tag: "c:gold_plates"
                    }
                ],
                results: [
                    {
                        item: "kubejs:transpot_shard_gilded",
                        nbt: "{Damage:100}"
                    }
                ]
            },
            {
                type: "createaddition:charging",
                input: {
                    item: "kubejs:transport_shard_gilded",
                    count: 1
                },
                result:  {
                    item: "kubejs:transport_shard_gilded",
                    nbt: "{Damage:0}",
                    count: 1
                },
                energy: 2000000,
                maxChargeRate: 1600
            }
        ],
        results: [
            {
                item: "kubejs:transport_shard_gilded"
            }
        ],
        loops: 1
    });
});