export default function specialAbility(obj) {
    return obj.special.map(({ id, name, icon, description = "Описание недоступно"}) => ({ id, name, icon, description }));
    }