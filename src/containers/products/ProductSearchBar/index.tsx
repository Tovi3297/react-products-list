import * as React from 'react';
import { Form } from 'react-bootstrap';

interface Props {
	filterText: string;
	filterId:string;
	inStockOnly: boolean;
	onFilterTextChange: (text: string) => void;
	onInStockChange: (inStock: boolean) => void;
	onFilterIdChange:(text: string) => void;
}

const ProductSearchBar: React.FC<Props> = (props: Props) => {
	const {
		filterText,filterId, inStockOnly, onFilterTextChange, onInStockChange,onFilterIdChange
	} = props;

	function handleFilterTextChange(e: React.ChangeEvent<HTMLInputElement>) {
		onFilterTextChange(e.target.value.toString());
	}
	function handleFilterIdChange(e: React.ChangeEvent<HTMLInputElement>){
		onFilterIdChange(e.target.value.toString());
	}
	
	function handleInStockChange(e: React.ChangeEvent<HTMLInputElement>) {
		const value: boolean = e.target.checked as any as boolean;
		onInStockChange(value);
	}
	return (
		<Form>
			<Form.Group>
				<Form.Control
					type="text"
					placeholder="Search..."
					value={filterText}
					onChange={handleFilterTextChange}
				/>
				<Form.Control
					type="text"
					placeholder="equals id"
					value={filterId}
					onChange={handleFilterIdChange}
				/>
			</Form.Group>

			<Form.Group>
				<Form.Check
					label="Only show products in stock"
					checked={inStockOnly}
					onChange={handleInStockChange}
				/>
			</Form.Group>
		</Form>
	);
};

export default ProductSearchBar;
