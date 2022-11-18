import NotificationButton from '../NotificationButton';
import './styles.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

function SalesCard() {

  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  return (
    <div className="smmeta-card">
      <h2 className="smmeta-sales-title">Vendas</h2>
      <div>
        <div className="smmeta-form-control-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="smmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="smmeta-form-control-container">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="smmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div>
        <table className="smmeta-sales-table">
          <thead>
            <tr>
              <th className="show-992">ID</th>
              <th className="show-576">Data</th>
              <th>Vendedor</th>
              <th className="show-992">Visitas</th>
              <th className="show-992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="show-992">#341</td>
              <td className="show-576">08/11/2003</td>
              <td>Ashtar Sheran</td>
              <td className="show-992">15</td>
              <td className="show-992">11</td>
              <td>328000</td>
              <td>
                <div className="smmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show-992">#341</td>
              <td className="show-576">08/11/2003</td>
              <td>Ashtar Sheran</td>
              <td className="show-992">15</td>
              <td className="show-992">11</td>
              <td>328000</td>
              <td>
                <div className="smmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show-992">#341</td>
              <td className="show-576">08/11/2003</td>
              <td>Ashtar Sheran</td>
              <td className="show-992">15</td>
              <td className="show-992">11</td>
              <td>328000</td>
              <td>
                <div className="smmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default SalesCard;