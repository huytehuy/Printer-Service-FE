import ExcelJS, { CellRichTextValue, Row, Style, Workbook, Worksheet } from 'exceljs';

function ExportToExcel(
  data: any[],
  fileName: string,
  titleTable: string,
  username = 'user',
  fromDate = new Date().toDateString(),
  sheetName = 'Sheet1'
) {
  const workbook: Workbook = new ExcelJS.Workbook();
  const worksheet: Worksheet = workbook.addWorksheet(sheetName);

  // Thêm tiêu đề vào ô đầu tiên của sheet
  const title: CellRichTextValue = {
    richText: [
      { text: `${titleTable}\n`, font: { bold: true, size: 16, color: { argb: 'FFFFFFFF' } } },
      {
        text: `${username}\n`,
        font: { bold: true, size: 14, color: { argb: 'FFFFFFFF' } },
      },
      {
        text: `${fromDate}`,
        font: { size: 14, color: { argb: 'FFFFFFFF' } },
      },
    ],
  };
  const totalMergeRow = 4;
  const bgColorHeader = '697c9e';
  const bgColorTitle = '364258';
  // Lấy tên các cột từ object đầu tiên trong mảng data
  const columnNames = Object.keys(data[0]);
  worksheet.mergeCells(1, 1, totalMergeRow, columnNames.length);
  const titleRow = worksheet.getRow(1);
  titleRow.getCell(1).value = title;
  titleRow.getCell(1).alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };

  titleRow.getCell(1).fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: bgColorTitle },
  };

  // Thêm tên cột vào sheet
  const headerRow: Row = worksheet.addRow(columnNames);
  // Style cho header
  headerRow.eachCell((cell: Style) => {
    cell.font = { bold: true, size: 14, color: { argb: 'FFFFFFFF' } };
    cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: bgColorHeader },
    };
    // Đóng khung phần nội dung
    cell.border = {
      top: { style: 'thin' },
      right: { style: 'thin' },
      bottom: { style: 'thin' },
      left: { style: 'thin' },
    };
  });
  // Thêm dữ liệu vào sheet
  data.forEach((row) => {
    const rowData = columnNames.map((columnName: string) => row[columnName]);
    worksheet.addRow(rowData);
  });

  // Auto-fit cho chiều rộng của cột
  worksheet.columns.forEach((column) => {
    let maxLength = 0;
    if (column && column.eachCell) {
      column.eachCell({ includeEmpty: true }, (cell, rowNumber) => {
        const columnWidth = cell.value ? String(cell.value).length : 10;
        if (columnWidth > maxLength) {
          maxLength = columnWidth;
        }
        column.width = maxLength + 5;
        if (rowNumber > totalMergeRow + 1) {
          cell.font = {
            name: 'Arial',
            family: 2,
            bold: false,
            size: 10,
          };
          // Đóng khung phần nội dung
          cell.border = {
            top: { style: 'thin' },
            right: { style: 'thin' },
            bottom: { style: 'thin' },
            left: { style: 'thin' },
          };
          // cell.alignment = {
          //   vertical: 'middle',
          //   horizontal: 'left',
          // };
        }
      });
    }
  });

  // Tạo file Excel
  workbook.xlsx.writeBuffer().then((buffer) => {
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.xlsx`;
    link.click();
    URL.revokeObjectURL(url);
  });
}

export function ExportToExcelMonitor(
  data: any[],
  listCol: any[],
  fileName: string,
  titleTable: string,
  username = 'user',
  fromDate = new Date().toDateString(),
  sheetName = 'Sheet1',
  formatDateTime: any
) {
  const workbook: Workbook = new ExcelJS.Workbook();
  const worksheet: Worksheet = workbook.addWorksheet(sheetName);

  // Thêm tiêu đề vào ô đầu tiên của sheet
  const title: CellRichTextValue = {
    richText: [
      { text: `${titleTable}\n`, font: { bold: true, size: 16, color: { argb: 'FFFFFFFF' } } },
      {
        text: `${username}\n`,
        font: { bold: true, size: 14, color: { argb: 'FFFFFFFF' } },
      },
      {
        text: `${fromDate}`,
        font: { size: 14, color: { argb: 'FFFFFFFF' } },
      },
    ],
  };
  const totalMergeRow = 4;
  const bgColorHeader = '697c9e';
  const bgColorTitle = '364258';

  // Lấy tên các cột từ object đầu tiên trong mảng data
  const columnNames = listCol.map(({ header }) => header);
  worksheet.mergeCells(1, 1, totalMergeRow, columnNames.length);
  const titleRow = worksheet.getRow(1);
  titleRow.getCell(1).value = title;
  titleRow.getCell(1).alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };

  titleRow.getCell(1).fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: bgColorTitle },
  };

  // Thêm tên cột vào sheet
  const headerRow: Row = worksheet.addRow(columnNames);
  // Style cho header
  headerRow.eachCell((cell: Style) => {
    cell.font = { bold: true, size: 14, color: { argb: 'FFFFFFFF' } };
    cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: bgColorHeader },
    };
    // Đóng khung phần nội dung
    cell.border = {
      top: { style: 'thin' },
      right: { style: 'thin' },
      bottom: { style: 'thin' },
      left: { style: 'thin' },
    };
  });

  const formatDataDownload = () => {
    const RowsData: any[] = [];
    [...data].forEach(({ vehicleGroup, ...element }) => {
      if (vehicleGroup) {
        RowsData.push([vehicleGroup]);
      }

      const subRows = element?.subRows || [];

      if (subRows.length !== 0) {
        subRows.forEach((element: any) => {
          const flag: any = {};
          listCol.forEach(({ header, key }: { header: any; key: any }) => {
            if (key === 'gpsTime') {
              flag[header] = formatDateTime(element[key]);
            } else {
              flag[header] = element[key];
            }
          });
          RowsData.push(Object.values(flag));
        });
      }
    });

    return RowsData;
  };
  // Thêm dữ liệu vào sheet
  formatDataDownload().forEach((row) => {
    worksheet.addRow(row);
  });

  // Auto-fit cho chiều rộng của cột
  worksheet.columns.forEach((column) => {
    let maxLength = 0;
    if (column && column.eachCell) {
      column.eachCell({ includeEmpty: true }, (cell, rowNumber) => {
        const columnWidth = cell.value ? String(cell.value).length : 10;
        if (columnWidth > maxLength) {
          maxLength = columnWidth;
        }
        column.width = maxLength + 5;
        if (rowNumber > totalMergeRow + 1) {
          cell.font = {
            name: 'Arial',
            family: 2,
            bold: false,
            size: 10,
          };
          // Đóng khung phần nội dung
          cell.border = {
            top: { style: 'thin' },
            right: { style: 'thin' },
            bottom: { style: 'thin' },
            left: { style: 'thin' },
          };
          // cell.alignment = {
          //   vertical: 'middle',
          //   horizontal: 'left',
          // };
        }
      });
    }
  });

  // Tạo file Excel
  workbook.xlsx.writeBuffer().then((buffer) => {
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.xlsx`;
    link.click();
    URL.revokeObjectURL(url);
  });
}
export default ExportToExcel;
