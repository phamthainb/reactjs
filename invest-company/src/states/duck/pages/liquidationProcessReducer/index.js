import * as types from './constants';
var initialState = {
    data:[
        {
            "id": 1,
            "codeCT": "1223345",
            "name": "Nguyễn Văn A",
            "price": "10.000.000",
            "cart": "Chuyển khoản",
            "create_by": "05/12/2019",
            "processor": "1223345sezcax",
            "status": 1
        },
        {
            "id": 2,
            "codeCT": "1223345",
            "name": "Nguyễn Văn A",
            "price": "10.000.000",
            "cart": "Chuyển khoản",
            "create_by": "05/12/2019",
            "processor": "1223345sezcax",
            "status": 1
        },
        {
            "id": 3,
            "codeCT": "1223345",
            "name": "Nguyễn Văn A",
            "price": "10.000.000",
            "cart": "Chuyển khoản",
            "create_by": "05/12/2019",
            "processor": "1223345sezcax",
            "status": 1
        },
        {
            "id": 4,
            "codeCT": "1223345",
            "name": "Nguyễn Văn A",
            "price": "10.000.000",
            "cart": "Chuyển khoản",
            "create_by": "05/12/2019",
            "processor": "1223345sezcax",
            "status": 1
        },
        {
            "id": 5,
            "codeCT": "1223345",
            "name": "Nguyễn Văn A",
            "price": "10.000.000",
            "cart": "Chuyển khoản",
            "create_by": "05/12/2019",
            "processor": "1223345sezcax",
            "status": 1
        },
        {
            "id": 6,
            "codeCT": "1223345",
            "name": "Nguyễn Văn A",
            "price": "10.000.000",
            "cart": "Chuyển khoản",
            "create_by": "05/12/2019",
            "processor": "1223345sezcax",
            "status": 1
        },
        {
            "id": 7,
            "codeCT": "1223345",
            "name": "Nguyễn Văn A",
            "price": "10.000.000",
            "cart": "Chuyển khoản",
            "create_by": "05/12/2019",
            "processor": "1223345sezcax",
            "status": 1
        },
    ]
	
};
var reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_TABLE:
            return {...state};
        default:
            return state;
    }
}
export default reducer;