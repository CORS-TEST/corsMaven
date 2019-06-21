package core.common.util;

public class RowRangeUtil {
	private int startColumnIndex;
	private int endColumnIndex;

	public RowRangeUtil(int startColumnIndex, int endColumnIndex) {
		this.startColumnIndex = startColumnIndex;
		this.endColumnIndex = endColumnIndex;
	}

	public int getStartColumnIndex() {
		return this.startColumnIndex;
	}

	public void setStartColumnIndex(int startColumnIndex) {
		this.startColumnIndex = startColumnIndex;
	}

	public int getEndColumnIndex() {
		return this.endColumnIndex;
	}

	public void setEndColumnIndex(int endColumnIndex) {
		this.endColumnIndex = endColumnIndex;
	}
}
