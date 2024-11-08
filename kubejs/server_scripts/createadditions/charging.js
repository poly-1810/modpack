ServerEvents.recipes(event => {
    event.custom({
        type:"createaddition:charging",
        input: {
            item: "kubejs:inert_transport_shard",
            count: 1
        },
        result:  {
            item: "kubejs:transport_shard_basic",
            count: 1
        },
        energy: 1000000,
        maxChargeRate: 800
    });

    event.custom({
        type:"createaddition:charging",
        input: {
            item: "kubejs:inert_utility_shard",
            count: 1
        },
        result:  {
            item: "kubejs:utility_shard_basic",
            count: 1
        },
        energy: 1000000,
        maxChargeRate: 800
    });

    event.custom({
        type:"createaddition:charging",
        input: {
            item: "kubejs:inert_combat_shard",
            count: 1
        },
        result:  {
            item: "kubejs:combat_shard_basic",
            count: 1
        },
        energy: 1000000,
        maxChargeRate: 800
    });

    event.custom({
        type:"createaddition:charging",
        input: {
            item: "kubejs:inert_conjuring_shard",
            count: 1
        },
        result:  {
            item: "kubejs:conjuring_shard_basic",
            count: 1
        },
        energy: 1000000,
        maxChargeRate: 800
    });
});