const initState = {
    themeId: 1,
}

type TInitState = typeof initState;

type SetThemeIdAT = {
    type: 'SET_THEME_ID';
    id: number;
}
type ActionsType = SetThemeIdAT;

export const themeReducer = (state = initState, action: ActionsType): TInitState => {
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number): SetThemeIdAT => ({ type: 'SET_THEME_ID', id } as const)
