export default function specialAbility(obj) {
    return obj.special.map((item) => {
        let id = item.id;
        let name = item.name;
        let icon = item.icon;

        let description = item.description !== undefined
            ? item.description
            : 'Описание недоступно';

        return {
            id: id,
            name: name,
            icon: icon,
            description: description
        };
    });
}