import React from "react";
import PaginationTable from "../../bases/shared/paginationTable.js";
import { useSelector} from 'react-redux';
const InvestorsList = (props) => {
	var tableList =useSelector(state=>state.liquidationProcess.data);
	
	return (
		<div className="table-content">
			<div className="table">
				<table>
					<thead>
						<tr>
							<th>Mã HĐ</th>
							<th>Họ tên nhà đầu tư</th>
							<th>Tiền đầu tư</th>
							<th>Số tiền sau thanh lý</th>
							<th>Ngày yêu cầu</th>
							<th>Người xử lý</th>
							<th>Trạng thái</th>
							<th>Hành động</th>
						</tr>
					</thead>
					<tbody>
						{tableList.map((item, index) => {
							return (
								<tr key={index}>
									<td>
										{item.codeCT}
									</td>
									<td>{item.price}</td>
									<td className="no-wrap">{item.name}</td>
									<td className="no-wrap">{item.cart}</td>
									<td>{item.create_by}</td>
									<td>{item.processor}</td>
									<td>{item.status === 1 ? "Xử lý" : "Chưa"}</td>
									<td>
										<button onClick={()=> props.onClick(true)} className="btn green__btn">
											Kích hoạt
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<PaginationTable list={tableList} />
		</div>
	);
};

export default InvestorsList;
