
declare const t_element: unique symbol;
declare const t_attributes: unique symbol;
declare const t_content: unique symbol;
declare const t_children: unique symbol;
const element = Symbol('element')
const attributes = Symbol('attributes')
const content = Symbol('content')
const children = Symbol('children')

type E = {
    [t_element]: string | Element;
    [t_attributes]: object | null;
    [t_content]: string | null;
    [t_children]: E[] | null;
};

const E = (
    ...e_like: [
        E[typeof t_element],
        E[typeof t_attributes],
        E[typeof t_content],
        E[typeof t_children]
    ]
): E => {
    return {
        [t_element]: e_like[0],
        [t_attributes]: e_like[1],
        [t_content]: e_like[2],
        [t_children]: e_like[3],
        };
};