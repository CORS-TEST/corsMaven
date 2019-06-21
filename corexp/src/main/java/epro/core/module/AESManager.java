package epro.core.module;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.codec.binary.Base64;

public class AESManager {

	private static volatile AESManager INSTANCE;

	// final static String secretKey = "12345678901234567890123456789012"; //
	// 32bit
	final static String secretKey = "COREXP7890123456"; // 16bit
	static String IV = ""; // 16bit

	public static AESManager getInstance() {
		if (INSTANCE == null) {
			synchronized (AESManager.class) {
				if (INSTANCE == null)
					INSTANCE = new AESManager();
			}
		}
		return INSTANCE;
	}

	private AESManager() {
		IV = secretKey.substring(0, 16);
	}

	/**
	 * 암호화
	 *
	 * @param String str
	 * @param kid
	 * @return
	 */	
	public static String AES_Encode(String str) {
		byte[] keyData = secretKey.getBytes();

		SecretKey secureKey = new SecretKeySpec(keyData, "AES");

		String rtnstr = "";

		try {
			Cipher c;
			c = Cipher.getInstance("AES/CBC/PKCS5Padding");
			c.init(Cipher.ENCRYPT_MODE, secureKey,
					new IvParameterSpec(IV.getBytes()));
			byte[] encrypted = c.doFinal(str.getBytes("UTF-8"));
			rtnstr = new String(Base64.encodeBase64(encrypted));

		} catch (Exception e) {
			e.printStackTrace();
		}
		return rtnstr;
	}

	/**
	 * 복호화
	 *
	 * @param GetParameter
	 * @param kid
	 * @return
	 */	
	public static String AES_Decode(String str) {
		byte[] keyData = secretKey.getBytes();
		SecretKey secureKey = new SecretKeySpec(keyData, "AES");
		String rtnstr = "";

		try {
			Cipher c = Cipher.getInstance("AES/CBC/PKCS5Padding");
			c.init(Cipher.DECRYPT_MODE, secureKey,
					new IvParameterSpec(IV.getBytes("UTF-8")));

			byte[] byteStr = Base64.decodeBase64(str.getBytes());

			rtnstr = new String(c.doFinal(byteStr), "UTF-8");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return rtnstr;
	}

	/**
	 * AES 인증 Key값을 생성하여 kid와 비교를 하여 같으면 True 틀리면 false 를 리턴한다.
	 *
	 * @param GetParameter
	 * @param kid
	 * @return
	 */
	public static boolean checkEncrypt(String GetParameter, String kid) {
		boolean state = false;
		try {
			String encrypt = AES_Encode(GetParameter);

			kid = kid.replace(" ", "+");

			if (encrypt.equals(kid))
				state = true;

		} catch (Exception e) {
		}
		return state;
	}

}