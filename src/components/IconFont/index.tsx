import type { IconFontProps } from '@ant-design/icons/lib/components/IconFont';
import { createFromIconfontCN } from '@ant-design/icons';
import { iconfont } from '@/configs';

const IconFontScriptUrl: string | string[] = iconfont;
/**
 * 使用IconFont字体图标
 */
const IconFont: React.FC<IconFontProps> = createFromIconfontCN({ scriptUrl: IconFontScriptUrl });

export default IconFont;
