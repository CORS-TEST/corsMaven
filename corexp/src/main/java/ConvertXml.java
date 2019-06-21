import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.w3c.dom.Attr;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

public class ConvertXml {
	public static final String rootStr = "D:\\00.Project\\CoreXp_2019\\workspace\\CoreXp\\WebContent\\COR5_source\\form\\EPRO";
	//public static final String rootStr = "D:\\00.Project\\CoreXp_2019\\workspace\\CoreXp\\WebContent\\COR5_source\\frame";
	//public static final String rootStr = "D:\\00.Project\\CoreXp_2019\\workspace\\CoreXp\\WebContent\\COR5_source\\form\\EPRO\\SYS\\Buyer";
	public Map title;
	public Map gridTitle;
	public Map resource;

	ConvertXml() {
		title = new HashMap();
		gridTitle = new HashMap();
		resource = new HashMap();
	}

	public static void main(String[] args) {
		ConvertXml cx = new ConvertXml();
		//cx.readResourceFile();
		System.out.println("Convirt Start!!!!!!");
		cx.traceFiles();
		System.out.println("Convirt End!!!!!!");
	}

	public void traceFiles() {
		File roots = new File(rootStr);
		File[] rootsFolder = roots.listFiles();

		for (int i = 0; i < rootsFolder.length; i++) {
			String urls = rootStr + "\\" + rootsFolder[i].getName();
			File rroots = new File(urls);
			File[] rrootsFolder = rroots.listFiles();
			for (int j = 0; j < rrootsFolder.length; j++) {
				String rrottsUrl = urls + "\\" + rrootsFolder[j].getName();
				File rrroots = new File(rrottsUrl);
				File[] rrrootsFolder = rrroots.listFiles();
				if (rrroots.isDirectory()) {
					for (int k = 0; k < rrrootsFolder.length; k++) {
						String rrrootUrl = rrottsUrl + "\\" + rrrootsFolder[k].getName();
						readFiles(rrrootUrl);
					}
				} else {
					readFiles(rrottsUrl);
				}
			}
		}

		//특정 디렉토리 경로지정시 사용

		//		String rrottsUrl = rootStr;
		//		File rrroots = new File(rrottsUrl);
		//		File[] rrrootsFolder = rrroots.listFiles();
		//		if (rrroots.isDirectory()) {
		//			for (int k = 0; k < rrrootsFolder.length; k++) {
		//				String rrrootUrl = rrottsUrl + "\\" + rrrootsFolder[k].getName();
		//				readFiles(rrrootUrl);
		//			}
		//		} else {
		//			readFiles(rrottsUrl);
		//		}

		/*
		 * Set key = this.title.keySet();
		 * 
		 * for (Iterator iterator = key.iterator(); iterator.hasNext();) {
		 * String keyName = (String) iterator.next();
		 * System.out.println(keyName); } System.out.println(
		 * "========================================================"); Set gkey
		 * = this.gridTitle.keySet(); for (Iterator iterator = gkey.iterator();
		 * iterator.hasNext();) { String keyName = (String) iterator.next();
		 * System.out.println(keyName); }
		 * 
		 * System.out.println("title 갯수 :[" + key.size() + "] grid title 갯수 : ["
		 * + gkey.size() + "]");
		 */
	}

	public void readFiles(String rootsStr) {
		File source = new File(rootsStr);
		try {
			FileInputStream sIs = new FileInputStream(source);
			DocumentBuilder docBuilder = DocumentBuilderFactory.newInstance().newDocumentBuilder();
			Document doc = docBuilder.parse(sIs);
			sIs.close();

			//기존리소스 라벨값 삭제 및 초기화
			deleteRsrcNode(doc);

			// 텍스트뽑기
			// extractionTitle(doc);
			// 키뽑기
			// extractionKey(doc);
			TransformerFactory transformerFactory = TransformerFactory.newInstance();
			Transformer transformer = transformerFactory.newTransformer();

			transformer.setOutputProperty(OutputKeys.ENCODING, "UTF-8");
			transformer.setOutputProperty(OutputKeys.INDENT, "yes");
			DOMSource sour = new DOMSource(doc);

			// 파일로 쓰지 않고 콘솔에 찍어보고 싶을 경우 다음을 사용 (디버깅용)
			// StreamResult result = new StreamResult(System.out);

			StreamResult result = new StreamResult(source);

			transformer.transform(sour, result);

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public void extractionKey(Document doc) {
		NodeList node = doc.getElementsByTagName("BindItem");
		for (int i = 0; i < node.getLength(); i++) {
			if ("text".equals(node.item(i).getAttributes().getNamedItem("propid").getTextContent())) {
				title.put(node.item(i).getAttributes().getNamedItem("columnid").getTextContent(), "1");
			}
		}
		node = doc.getElementsByTagName("Band");
		for (int i = 0; i < node.getLength(); i++) {
			if (node.item(i).getAttributes().getNamedItem("id") != null) {
				if ("head".equals(node.item(i).getAttributes().getNamedItem("id").getTextContent())) {
					NodeList cnode = node.item(i).getChildNodes();
					for (int j = 0; j < cnode.getLength(); j++) {
						if (cnode.item(j).getAttributes() != null) {
							if (cnode.item(j).getAttributes().getNamedItem("expr") != null) {

								gridTitle.put(cnode.item(j).getAttributes().getNamedItem("expr").getTextContent(), "1");
								// replaceGridTitleToResource(cnode.item(j),
								// doc);
							}
						}

					}
				}
			}
		}
	}

	public void extractionTitle(Document doc) {
		String titles[] = { "Static", "Div", "Button" };
		// 일반
		for (int i = 0; i < titles.length; i++) {
			NodeList node = doc.getElementsByTagName(titles[i]);
			for (int j = 0; j < node.getLength(); j++) {
				if (node.item(j).getAttributes().getNamedItem("text") != null) {
					title.put(node.item(j).getAttributes().getNamedItem("text").getTextContent(), "1");
					// replaceTitleToResource(node.item(j), doc);
				}
			}
		}

		// 그리드
		NodeList node = doc.getElementsByTagName("Band");
		for (int i = 0; i < node.getLength(); i++) {
			if (node.item(i).getAttributes().getNamedItem("id") != null) {
				if ("head".equals(node.item(i).getAttributes().getNamedItem("id").getTextContent())) {
					NodeList cnode = node.item(i).getChildNodes();
					for (int j = 0; j < cnode.getLength(); j++) {
						if (cnode.item(j).getAttributes() != null) {
							if (cnode.item(j).getAttributes().getNamedItem("text") != null) {
								gridTitle.put(cnode.item(j).getAttributes().getNamedItem("text").getTextContent(), "1");
								// replaceGridTitleToResource(cnode.item(j),
								// doc);
							}
						}

					}
				}
			}
		}

	}

	public void replaceTitleToResource(Node node, Document doc) {
		String nodeId = node.getAttributes().getNamedItem("id").getTextContent();
		String nodeTtl = node.getAttributes().getNamedItem("text").getTextContent();
		String id = "";
		// System.out.println("replaceTitleToResource::"+node.getParentNode().getNodeName());
		while (!"Form".equals(node.getParentNode().getNodeName())) {
			if (node.getAttributes().getNamedItem("id") != null) {
				if ("".equals(id)) {
					id = node.getAttributes().getNamedItem("id").getTextContent();
				} else {
					id = node.getAttributes().getNamedItem("id").getTextContent() + "." + id;
				}
			}
			node = node.getParentNode();
		}

		Calendar calendar = Calendar.getInstance();
		java.util.Date date = calendar.getTime();
		String today = (new SimpleDateFormat("yyyyMMddHHmmss").format(date));
		Random temp = new Random();
		int ranNum = temp.nextInt(100000);

		String ranName = today + ranNum;

		Element bindNode = doc.createElement("BindItem");
		Attr aid = doc.createAttribute("id");
		aid.setValue(nodeId + "LangBind" + ranName);
		Attr compid = doc.createAttribute("compid");
		compid.setValue(id);
		Attr propid = doc.createAttribute("propid");
		propid.setValue("text");
		Attr datasetid = doc.createAttribute("datasetid");
		datasetid.setValue("gdsLabel");
		Attr columnid = doc.createAttribute("columnid");
		columnid.setValue((String) this.resource.get(nodeTtl));

		bindNode.setAttributeNode(aid);
		bindNode.setAttributeNode(compid);
		bindNode.setAttributeNode(propid);
		bindNode.setAttributeNode(datasetid);
		bindNode.setAttributeNode(columnid);

		// System.out.println(bindNode.toString());

		if (doc.getElementsByTagName("Bind").item(0) != null) {
			doc.getElementsByTagName("Bind").item(0).appendChild(bindNode);
		} else {
			Element bind = doc.createElement("Bind");
			doc.getElementsByTagName("Form").item(0).appendChild(bind);
			System.out.println("null!!!!!!!");
		}
	}

	public void replaceGridTitleToResource(Node node, Document doc) {
		String nodeTtl = node.getAttributes().getNamedItem("text").getTextContent();

		Attr expr = doc.createAttribute("expr");
		expr.setValue("expr:gfnMultiLabel(&quot;" + this.resource.get(nodeTtl) + "&quot;)");

		((Element) node).setAttributeNode(expr);

	}

	public void readResourceFile() {
		try {
			FileInputStream fis = new FileInputStream("C:\\리소스관련.xlsx");
			XSSFWorkbook workbook = new XSSFWorkbook(fis);
			int rowindex = 0;
			int columnindex = 0;
			XSSFSheet sheet = workbook.getSheetAt(0);
			// 행의 수
			int rows = sheet.getPhysicalNumberOfRows();
			for (rowindex = 0; rowindex < rows; rowindex++) {
				String title = "";
				String res = "";
				// 행을읽는다
				XSSFRow row = sheet.getRow(rowindex);
				if (row != null) {
					// 셀의 수
					int cells = row.getPhysicalNumberOfCells();
					for (columnindex = 0; columnindex <= cells; columnindex++) {
						// 셀값을 읽는다
						XSSFCell cell = row.getCell(columnindex);
						String value = "";
						// 셀이 빈값일경우를 위한 널체크
						if (cell == null) {
							continue;
						} else {
							// 타입별로 내용 읽기
							switch (cell.getCellType()) {
							case XSSFCell.CELL_TYPE_FORMULA:
								// value = cell.getCellFormula();
								value = cell.getStringCellValue();
								break;
							case XSSFCell.CELL_TYPE_NUMERIC:
								value = cell.getNumericCellValue() + "";
								break;
							case XSSFCell.CELL_TYPE_STRING:
								value = cell.getStringCellValue() + "";
								break;
							case XSSFCell.CELL_TYPE_BLANK:
								value = cell.getBooleanCellValue() + "";
								break;
							case XSSFCell.CELL_TYPE_ERROR:
								value = cell.getErrorCellValue() + "";
								break;
							}
						}

						if (columnindex == 1) {
							res = value;
							// System.out.print("패키지 :[" + value + "]");
						} else if (columnindex == 0) {
							title = value;
							// System.out.print("서비스 :[" + value + "]");
						}
					}
				}
				this.resource.put(title, res);
			}
			// Set key = this.resource.keySet();
			//
			// for (Iterator iterator = key.iterator(); iterator.hasNext();) {
			// String keyName = (String) iterator.next();
			// System.out.println("KEY::["+keyName+"]value["+this.resource.get(keyName)+"]");
			// }
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/*
	 * 라벨 셋팅하기전에 기존라벨코드값 삭제. extractionTitle 함수에서 기존 bind 노드에 append 하기때문에 기존꺼
	 * 삭제 해줘야됨
	 */
	public void deleteRsrcNode(Document doc) {

		/* 라벨 셋팅하기전에 기존라벨코드값 삭제 */
		Node bindNode = doc.getElementsByTagName("Bind").item(0);
		NodeList itemNode = doc.getElementsByTagName("BindItem");
		for (int i = 0; i < itemNode.getLength(); i++) {
			String nodeValue = itemNode.item(i).getAttributes().getNamedItem("datasetid").getTextContent();
			if ((nodeValue.equals("gdsLabel")) || nodeValue == "gdsLabel") {
				bindNode.removeChild(itemNode.item(i));
			}
		}

		/* 그리드 셋팅하기전에 기존그리드 헤더값 삭제 */
		NodeList node = doc.getElementsByTagName("Band");
		for (int i = 0; i < node.getLength(); i++) {
			if (node.item(i).getAttributes().getNamedItem("id") != null) {
				if ("head".equals(node.item(i).getAttributes().getNamedItem("id").getTextContent())) {
					NodeList cnode = node.item(i).getChildNodes();
					for (int j = 0; j < cnode.getLength(); j++) {
						if (cnode.item(j).getAttributes() != null) {
							if (cnode.item(j).getAttributes().getNamedItem("expr") != null) {
								cnode.item(j).getAttributes().getNamedItem("expr").setTextContent("");
							}
							if (cnode.item(j).getAttributes().getNamedItem("tooltiptext") != null) {
								cnode.item(j).getAttributes().getNamedItem("tooltiptext").setTextContent("");
							}
						}

					}
				}
			}
		}
	}
}
